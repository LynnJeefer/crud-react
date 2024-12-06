import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import HomeLayout from './layouts/HomeLayout';
import AddEdit from './components/AddEdit';
import UserList from './components/UserList';
import Modal from './components/Modal';
import './styles/App.css';

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';

function App() {
	const [users, setUsers, loading] = useFetch();
	const [isOpen, setIsOpen] = useState(false);
	const [currentChild, setCurrentChild] = useState(null);

	useEffect(() => {
		readUsers();
	}, []);

	//read all users
	const createUser = (dataForm) => {
		setUsers({
			url: `${baseUrl}/users`,
			method: 'POST',
			body: dataForm,
		});
		setIsOpen(false);
	};

	//Read all users
	const readUsers = () => {
		setUsers({ url: `${baseUrl}/users` });
	};

	//Update User
	const updateUser = (dataForm, userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'PATCH',
			body: dataForm,
		});
		setIsOpen(false);
	};

	//Delete user
	const deleteUser = (userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'DELETE',
		});
	};

	//HandlerOpenModal
	const openAdd = () => {
		setIsOpen(true);
		setCurrentChild(<AddEdit onSave={createUser} />);
	};

	const openEdit = (user) => {
		setIsOpen(true);
		setCurrentChild(<AddEdit user={user} onSave={updateUser} />);
	};

	return (
		<HomeLayout>
			<header className="header">
				<div className="header__container">
					<h1 className="header__title">Usuarios</h1>
					<button className="header__btn" type="button" onClick={openAdd}>
						Agregar Usuarios
					</button>
				</div>
			</header>

			<main className="container">
				{loading ? (
					<h2>Cargando...</h2>
				) : (
					<UserList users={users} openEdit={openEdit} deleteUser={deleteUser} />
				)}
			</main>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				{/* <AddEdit
					user={{
						first_name: '',
						last_name: '',
						email: '',
						password: '',
						birthday: '',
					}}
				/> */}
				{currentChild}
			</Modal>
		</HomeLayout>
	);
}

export default App;
