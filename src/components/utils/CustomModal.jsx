import React from 'react'
import {Modal} from 'react-bootstrap'
import {IoClose} from 'react-icons/io5'

const CustomModal = ({
    className,
    setIsShow,
    isShow = false,
    size,
    classNameHeader,
    title,
    children,
    footer,
    classNameFooter,
    classNameBody,
    closeButton,
}) => {
    const closeModal = () => setIsShow(false)

    return (
        <Modal className={className} show={isShow} onHide={closeModal} centered size={size}>
            {title && (
                <Modal.Header className={classNameHeader}>
                    <h5>{title}</h5>
                    {closeButton && (
                        <button className="close" onClick={closeModal}>
                            <IoClose />
                        </button>
                    )}
                </Modal.Header>
            )}
            <Modal.Body className={classNameBody}>{children}</Modal.Body>
            {footer && <Modal.Footer className={classNameFooter}>{footer}</Modal.Footer>}
        </Modal>
    )
}

export default CustomModal
