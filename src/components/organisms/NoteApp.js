import NoteList from "../molecules/NoteList/NoteList";
import Container from "../atoms/Container/Container";
import WidgetButton from "../atoms/WidgetButton/WidgetButton";
import Modal from "../molecules/Modal/Modal";

const NoteApp = () =>{
    return(
        <>
        <Container>
            <NoteList/>
            <WidgetButton text="+" position="bottom-right" label="Create Note"/>
        </Container>
        <Modal/>
        </>
    )
}

export default NoteApp;