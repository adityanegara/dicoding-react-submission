import styles from './SortGroup.module.scss'
import notesStore from '../../../store/noteStore';
import { getSelectedButton } from './SortGroupLogic';
import { useState } from 'react';

const SortGroups = () =>{
    const isArchived = notesStore(state => state.isArchived);
    const setIsArchivedTrue = notesStore(state => state.setIsArchivedTrue);
    const setIsArchivedFalse = notesStore(state => state.setIsArchivedFalse);
    const setSearchInput = notesStore(state => state.setSearchInput);
    const [search, setSearch] = useState('');

    return(
        <div className={styles['sort-group']}>
            <div className={styles['search-input']}>
                <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type={'text'}/>
                <button onClick={()=>{setSearchInput(search)}}>Search</button>
            </div>
           
            <div className={styles['sort-groups__buttons']}>
                <button onClick={setIsArchivedFalse} className={getSelectedButton('all', isArchived)}>
                    All
                </button>
                <button onClick={setIsArchivedTrue} className={getSelectedButton('archived', isArchived)}>
                    Archived
                </button>
            </div>
        </div>
     
    )
}

export default SortGroups;