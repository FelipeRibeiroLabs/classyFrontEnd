import React from 'react';
import { Formik, Field } from 'formik';
import {Input, Button, Tag} from 'antd'
import axios from 'axios';
import Container from '../../container/Container';
import './CrewForm.css'

export const AddCrewForm = ({onSuccess}) => {

    const tagStyle = {backgroundColor: '#f50', color: 'white', marginBottom: '10px'}

    return (
        <Container> 
            <Formik
            initialValues={{name: '', instagram: '', university: '', universityStatus: '', school: '', schoolYear: '', plataform: ''}}
            validate={values => {
                let errors = {};
                if(!values.name){
                    errors.name= 'Nome da turma é necessário!'
                }
                return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    onSuccess()
                    
                    axios.post('http://localhost:8080/api/turma', values)
                    .then(res => console.log(res));

                    
                    console.log('deu boa')
                    setSubmitting(false);
                }}
            >

                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                submitForm,
                isValid
                }) => (

                <form onSubmit={handleSubmit} className='form'>

                    <label className='label'> Nome: </label>
                    
                    <Input
                    name="name" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder='Nome da turma'
                    className='input'
                    />
                    {errors.name && touched.name && <Tag style={tagStyle}> {errors.name} </Tag>}

                    <label className='label'> Instagram: </label>
                    <Input
                    name="instagram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.instagram}
                    placeholder='Instagram da turma'
                    className='input'
                    />

                        <div className='divField'>
                            <label className='label'>
                            Turma
                            </label>
                            <Field type="radio" name="selected" component="select">
                            <option value="School">Escola</option>
                            <option value="University">Universitário</option>
                            <option value="Esport">E-Sport </option>      
                            </Field>

                            {
                                values.selected == "University" && (
                                    <fieldset className="form-group">
                                        <label className='label'>Nome da Universidade:</label>
                                        <Input
                                        name="university"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.university}
                                        placeholder='Nome da universidade'
                                        className='input'
                                        />

                                        <label className='label'>Status da Universidade:</label>
                                        <Input
                                        name="universityStatus"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.universityStatus}
                                        placeholder='Nome da universidade'
                                        className='input'
                                        />

                                    </fieldset>
                                )
                                ||
                                values.selected == "School" && (
                                    <fieldset className="form-group">
                                        <label className='label'>Nome da Escola:</label>
                                        <Input
                                        name="school"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.school}
                                        placeholder='Nome da escola'
                                        className='input'
                                        />

                                        <label className='label'>Série:</label>
                                        <Input
                                        name="schoolYear"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.schoolYear}
                                        placeholder='Série'
                                        className='input'
                                        />
                                    </fieldset>
                                )
                                ||
                                values.selected == "Esport" && (
                                    <fieldset className="form-group">
                                        <label className='label'>Plataforma:</label>
                                        <Input
                                        name="plataform"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.plataform}
                                        placeholder='Plataforma'
                                        className='input'
                                        />
                                    </fieldset>
                                )
                            }
                        </div>


                    <Button onClick={() => submitForm()} 
                    type="submit" 
                    disabled={isSubmitting | (touched && !isValid)}>
                    Submit
                    </Button>

                </form>
                )}
            </Formik>
        </Container>
    );
}