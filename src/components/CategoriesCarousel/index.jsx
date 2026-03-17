import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { set } from 'react-hook-form';

function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
            console.log(data);
        }

        loadCategories();
    }, []);

    return(
        <div>
            <h1>Oh ok</h1>
        </div>
    );
}

export default CategoriesCarousel;