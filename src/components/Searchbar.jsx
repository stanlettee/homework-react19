import styles from "./styles/Searchbar.module.css"
import { Component } from "react"
import { useState, useEffect } from "react"

export const Searchbar = ({search, handleInput}) => {
    const [input, setInput] = useState(search)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleInput(input)
    }

    return (
            <header className={styles.Searchbar}>
                <form onSubmit={handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}
