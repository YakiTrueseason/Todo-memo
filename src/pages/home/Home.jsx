import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/memo">
                <button>Memoへ</button>
            </Link>
            <Link to="/todo">
                <button>Todoへ</button>
            </Link>
        </div>
    );
}

export default Home;
