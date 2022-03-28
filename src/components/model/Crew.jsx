import React from 'react';
import {useState} from "react";
import {useFetch} from '../../hooks/useFetch'
import {Table, Modal, Button} from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import Container from "../container/Container";
import {CrewColumn} from '../../utils/TableColumns'
import { AddCrewForm } from "../forms/crew/AddCrewForm";
import './Model.css'

const Crew = () => {

    const {data: crew, isFetching, error} = useFetch('turma1')
    const [isAddCrewModel, setIsAddCrewModel] = useState(false);

    function openAddCrewModal() {setIsAddCrewModel(true)}
    function closeAddCrewModal() {setIsAddCrewModel(false)}


    return ( 
        <div className='tableDiv'>
            {
            isFetching 
            ? <LoadingOutlined style={{fontSize: 25}}/> 
            : <section className='pageSection'> 

            {
            error 
            ? 
                <div className='errorDiv'> 
                    <h2> Ops, ocorreu um erro.</h2> 
                    <h3> Por favor tente novamente </h3>
                    <h4> Caso o erro persista entre em contato com a nossa equipe! </h4>
                </div> 
            
            : 
                <>
            <h1>Hello World!</h1>

            <Button onClick={() => openAddCrewModal()} type='primary'> Criar </Button>
            <Modal
                title='Crie sua turma'
                visible={isAddCrewModel}
                onOk={closeAddCrewModal}
                onCancel={closeAddCrewModal}
                width={1000}
            > 
            <h1>Modal com AntD</h1>


            <AddCrewForm onSuccess={() => {
                closeAddCrewModal()
            }} />

            </Modal>

            <Container>
                <Table dataSource={crew} columns={CrewColumn} pagination={false} rowKey='id'/>
            </Container>
            </>

            }
            </section>
            }
        </div>
     );
}
 
export default Crew;