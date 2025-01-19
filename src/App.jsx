// Arquivo App.jsx

// import "./App.css";
import { PencilSimple, TrashSimple } from "phosphor-react";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalDelete from "./components/ModalDelete";

//import Header from "./components/Header";
//import Table from "./components/Table";

function App() {
   const [open, setOpen] = useState(false);
   const [openModalDelete, setOpenModalDelete] = useState(false);

   const [usuarios, setUsuarios] = useState([]);

   async function buscarUsuarios() {
      const usuariosDados = await axios.get("http://localhost:3000/users");

      setUsuarios(usuariosDados.data);

      //console.log(usuariosDados.data);
   }

   //console.log(usuarios);

   // buscarDados();

   useEffect(() => {
      buscarUsuarios();
   }, []);

   return (
      <main className="w-full h-screen p-4">
         <header className="bg-[#435E7D] flex justify-between text-white p-6">
            <h1 className="text-4xl">Usuários</h1>
            <button
               onClick={() => setOpen(true)}
               className="bg-green-600 px-6 rounded"
            >
               Novo Usuário
            </button>
         </header>

         <table className="w-full text-left ">
            <thead>
               <tr>
                  <th className="px-6">Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th className="px-6">Ações</th>
               </tr>
            </thead>

            <tbody>
               {usuarios.map((usuario) => (
                  <tr>
                     <td className="px-6">{usuario.name}</td>
                     <td>{usuario.email}</td>
                     <td>{usuario.phone}</td>
                     <td className="px-6">
                        <div>
                           <button>
                              <PencilSimple
                                 size={32}
                                 color="#cc9b14"
                                 weight="fill"
                              />
                           </button>
                           <button onClick={() => setOpenModalDelete(true)}>
                              <TrashSimple
                                 size={32}
                                 color="#af2c2c"
                                 weight="fill"
                              />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <Modal open={open} setOpen={setOpen} buscarUsuarios={buscarUsuarios} />

         <ModalDelete open={openModalDelete} setOpen={setOpenModalDelete} />
      </main>
   );
}

export default App;
