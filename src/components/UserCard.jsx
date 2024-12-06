import { GiPartyPopper } from 'react-icons/gi';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaRegTrashCan } from 'react-icons/fa6';
import './../styles/UserCard.css';

function UserCard({ user, openEdit, deleteUser }) {
	return (
		<div className="card">
			<h3 className="card__name">
				{user?.first_name} {user?.last_name}
			</h3>
			<div className="card__info">
				<div>
					<span className="card__label">Correo</span>
					{user?.email}
				</div>
				<div>
					<span className="card__label">Cumpleaños</span>
					<span className="card__data">
						<GiPartyPopper className="icon--gift" />
						{user?.birthday}
					</span>
				</div>
			</div>
			<div className="card__btns">
				<button
					className="btn btn--delete"
					onClick={() => deleteUser(user?.id)}
				>
					<FaRegTrashCan />
				</button>
				<button className="btn btn--edit" onClick={() => openEdit(user)}>
					<RiEdit2Fill />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
