import {useState} from 'react';
import { Formik, Field } from 'formik';
import {Input, Button} from 'antd'
import Container from '../../Container';
import './CrewForm.css'

export const AddCrewForm = () => {

    const [isUniversity, setIsUniversity] = useState(false)


    return (
        <Container> 
            <Formik
            initialValues={{crewName: '', instagram: '', university: '', universityStatus: '', crew: '', crewYear: '', plataform: ''}}
            validate={values => {
                let errors = {};
                if(!values.email){
                    errors.email = 'Opa, faltou sem email!'
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Ops, email inválido!';
                }
                if(!values.crewName){
                    errors.crewName= 'Nome da turma é necessário!'
                }
                if(!values.university){
                    errors.university= 'Nome da universidade é necessário!'
                }
                if(!values.crew){
                    errors.crew= 'Nome da turma é necessário!'
                }
                if(!values.crew){
                    errors.plataform= 'A plataforma é necessária!'
                }
                return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                }) => (
                <form onSubmit={handleSubmit} className='form'>

                    <label className='label'> Nome: </label>
                    <Input
                    name="crewName" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.crewName}
                    placeholder='Nome da turma'
                    className='input'
                    />
                    {errors.crewName && touched.crewName && errors.crewName}

                    <label className='label'> Instagram: </label>
                    <Input
                    name="instagram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.instagram}
                    placeholder='Instagram da turma'
                    className='input'
                    />
                    {errors.instagram && touched.instagram && errors.instagram}

                        <div className='divField'>
                            <label className='label'>
                            Turma
                            </label>
                            <Field type="radio" name="selected" component="select">
                            <option value="Crew">Escola</option>
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
                                    {errors.university && touched.university && errors.university}

                                    <label className='label'>Status da Universidade:</label>
                                    <Input
                                    name="universityStatus"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.universityStatus}
                                    placeholder='Nome da universidade'
                                    className='input'
                                    />
                                    {errors.universityStatus && touched.universityStatus && errors.universityStatus}

                                </fieldset>
                            )
                            ||
                            values.selected == "Crew" && (
                                <fieldset className="form-group">
                                    <label className='label'>Nome da Escola:</label>
                                    <Input
                                    name="crew"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.crew}
                                    placeholder='Nome da escola'
                                    className='input'
                                    />
                                    {errors.crew && touched.crew && errors.crew}

                                    <label className='label'>Série:</label>
                                    <Input
                                    name="crewYear"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.crewYear}
                                    placeholder='Série'
                                    className='input'
                                    />
                                    {errors.crewYear && touched.crewYear && errors.crewYear}
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
                                    {errors.plataform && touched.plataform && errors.plataform}
                                </fieldset>
                            )
                        }

                        </div>

                        <div className='divFileInput'>
                        <label className='labelMargin'> 
                            Logo
                            <input type="file" className='inputMargin'/>
                        </label>
                        </div>

                    <Button type="submit" disabled={isSubmitting}>
                    Submit
                    </Button>

                </form>
                )}
            </Formik>
        </Container>
    );
}