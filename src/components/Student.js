import {useState} from "react";
import {useFetch} from '../hooks/useFetch'
import {Table, Modal, Button} from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import Container from "./Container";
import {CrewColumn} from '../utils/TableColumns'
import { AddCrewForm } from "./forms/crew/AddCrewForm";

const Student = () => {

    const {data: crew, isFetching, error} = useFetch('turma')
    const [isAddStudentModel, setIsAddStudentModel] = useState(false);

    function openAddStudentModal() {setIsAddStudentModel(true)}
    function closeAddStudentModal() {setIsAddStudentModel(false)}

    return ( 
        <div>
            {
            isFetching 
            ? <LoadingOutlined style={{fontSize: 25}}/> 
            : <section> 

            <AddCrewForm />

            <h1>Hello World!</h1>

            <Button onClick={() => openAddStudentModal()} type='primary'> Criar </Button>
            <Modal
                title='Crie sua turma'
                visible={isAddStudentModel}
                onOk={closeAddStudentModal}
                onCancel={closeAddStudentModal}
                width={1000}
            > 
            <h1>Modal com AntD</h1>
            </Modal>

            <Container>
                <Table dataSource={crew} columns={CrewColumn} pagination={false} rowKey='id'/>
            </Container>

            </section>
            }
        </div>
     );
}
 
export default Student;