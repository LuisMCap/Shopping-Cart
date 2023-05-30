const ModalCheckout = (props) => {
    const handleCloseBtn = (e) => {
        props.setOpenModal(false)
        props.setCartItems([])
    }
    return(
        <div className="modal-bg">
            <div id="modal-cont">
                <div id="close-btn-modal-cont">
                    <button id="close-modal-btn" onClick={handleCloseBtn}> X </button>
                </div>
                <div id="thank-you-prompt-modal">
                    Thank you for buying!
                </div>
                <div id="confirm-close-modal-cont">
                    <button id="confirm-modal-btn" onClick={handleCloseBtn}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCheckout