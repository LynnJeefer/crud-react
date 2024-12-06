function ConfirmModal({ isOpen, onClose, onConfirm, user }) {
	if (!isOpen) return null; // No renderiza nada si no está abierto

	return (
		<div className="modal">
			<div className="modal__overlay" onClick={onClose}></div>
			<div className="modal__container">
				<h3 className="modal__title">Eliminar usuario</h3>
				<p className="modal__message">
					El usuario{' '}
					<strong>
						{user?.first_name} {user?.last_name}
					</strong>{' '}
					se eliminará. ¿Deseas continuar?
				</p>
				<div className="modal__actions">
					<button className="btn btn--cancel" onClick={onClose}>
						Cancelar
					</button>
					<button className="btn btn--confirm" onClick={onConfirm}>
						Aceptar
					</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmModal;
