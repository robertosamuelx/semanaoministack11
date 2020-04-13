import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {title,description,value};

        try {
            await api.post('/incidents',data,{
                headers: {
                    Authorization: localStorage.getItem('ongId')
                }
            });

            history.push('/profile');
        }
        catch(err){
            alert('ocorreu um erro');
        }
    }

    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Voltar para home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                    <input placeholder="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}