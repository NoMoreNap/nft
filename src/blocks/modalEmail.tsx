import React from 'react'

export function Times(props: { switcher: (e: boolean) => void} ) {
    const { switcher } = props
    const closeModal = () => {
        switcher(false)
    }
    return (
        <svg onClick={closeModal} className='modal_times' width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.1439 22.5L33.2064 14.4562C33.5594 14.1032 33.7578 13.6243 33.7578 13.125C33.7578 12.6257 33.5594 12.1468 33.2064 11.7937C32.8533 11.4407 32.3744 11.2423 31.8751 11.2423C31.3758 11.2423 30.897 11.4407 30.5439 11.7937L22.5001 19.8562L14.4564 11.7937C14.1033 11.4407 13.6244 11.2423 13.1251 11.2423C12.6258 11.2423 12.1469 11.4407 11.7939 11.7937C11.4408 12.1468 11.2425 12.6257 11.2425 13.125C11.2425 13.6243 11.4408 14.1032 11.7939 14.4562L19.8564 22.5L11.7939 30.5437C11.6181 30.718 11.4787 30.9254 11.3835 31.1539C11.2883 31.3824 11.2393 31.6275 11.2393 31.875C11.2393 32.1225 11.2883 32.3676 11.3835 32.5961C11.4787 32.8245 11.6181 33.0319 11.7939 33.2062C11.9682 33.382 12.1756 33.5215 12.404 33.6167C12.6325 33.7118 12.8776 33.7609 13.1251 33.7609C13.3727 33.7609 13.6177 33.7118 13.8462 33.6167C14.0747 33.5215 14.2821 33.382 14.4564 33.2062L22.5001 25.1437L30.5439 33.2062C30.7182 33.382 30.9256 33.5215 31.154 33.6167C31.3825 33.7118 31.6276 33.7609 31.8751 33.7609C32.1227 33.7609 32.3677 33.7118 32.5962 33.6167C32.8247 33.5215 33.0321 33.382 33.2064 33.2062C33.3821 33.0319 33.5216 32.8245 33.6168 32.5961C33.712 32.3676 33.761 32.1225 33.761 31.875C33.761 31.6275 33.712 31.3824 33.6168 31.1539C33.5216 30.9254 33.3821 30.718 33.2064 30.5437L25.1439 22.5Z"
                fill="white"
            />
        </svg>
    )
}

function ModalEmail(props: { switcher: (e: boolean) => void} ) {
    const { switcher } = props
    return (
        <section className="modal puff-in-center">
            <div className="modal_window ">
                <div className="modal_disciption">
                    <h1 className="modal_disciption-title">Начни прямо сейчас!</h1>
                    <p className="modal_disciption-text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                </div>
                <div className="modal_action">
                    <input className="modal_action-input" type="text" placeholder="Ваш email" />
                    <button className="modal_action-btn monochrome_btn">Оплатить</button>
                </div>
                <div className="modal_circle"/>
                {<Times switcher={switcher}/>}
            </div>
        </section>
    )
}

export default ModalEmail
