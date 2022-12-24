import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultFetch from '../axios/config';
import './NewPost.css';


const NewPost = () => {
const navigate = useNavigate();

const [responsibleName, setResponsibleName] = useState();

const createCount =  async (e) => {
  e.preventDefault();
  const post = {responsibleName};
  console.log(post);
  await defaultFetch.post("/counts", {
    body: post,
  });
};
  return (
   <div className="new-post">
    <h2>Inserir uma nova conta:</h2>
    <form onSubmit={(e) => createCount(e)}>
        <div className="form-control">
          <label htmlFor="responsibleName">Nome:</label>
          <input type="text" name="responsibleName" 
          id="responsibleName" 
          placeholder="Digite o nome" 
          onChange={(e) => setResponsibleName(e.target.value)}/>
        </div>
    <input type="submit" value="Criar Conta" className="btn"/>
    </form>
   </div>
  );
};

export default NewPost;