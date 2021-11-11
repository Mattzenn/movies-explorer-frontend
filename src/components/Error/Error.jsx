import './Error.css'

import React from "react";
import { Link } from 'react-router-dom';

export default function Error({ status, message }) {
    return (
        <section className="error">
            <span className="error__status">{status}</span>
            <h1 className="error__message">{message}</h1>
            <Link to="/" className="error__link">Назад</Link>
        </section>
    )
}