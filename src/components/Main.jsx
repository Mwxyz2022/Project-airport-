import React from 'react'

const Main = () => (
    <main className="main">
        <section className="main__search">
            <div className="container">
                <h2 className="title">flight search</h2>
                <div className="search">
                    <form className="search__form">
                        <div className="search__form__icon">
                            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                        </div>

                        <input
                            className="search__form__input"
                            type="text"
                            placeholder="Destination, flight #"
                        />
                        <button className="search__form__btn" type="submit">
                            search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
)

export default Main
