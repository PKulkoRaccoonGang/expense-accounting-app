import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import './style.scss'

function Form({categories, updateSpends}) {
    const [items, setItems] = useState([])
    const [category, setCategory] = useState('')
    const [money, setMoney] = useState(0)

    useEffect(() => {
        setItems(categories)
    }, [categories])


    function onCategoryChange(e) {
        setCategory(e.target.value)
    }

    function onMoneyChange(e) {
        setMoney(+e.target.value)
    }

    function onFormSubmit(e) {
        e.preventDefault()

        if (category === '' || money === 0) return

        const newItem = {
            "amount": `${money}`,
            "category": `${category}`,
            "time_created": `${new Date()}`
        }

        updateSpends(newItem);
        setMoney(0);
    }

    const options = items.map(item => {
        return (
            <option value={item} key={item}>{item}</option>
        )
    })

    return (
        <div className='spend-form'>
            <h2>Add new spend &#128549; :</h2>

            <form onSubmit={onFormSubmit}>
                <div className="input-wrapper __wide">
                    <select name="category" onChange={onCategoryChange}>
                        <option value=''>Select category</option>
                        {options}
                    </select>
                </div>
                <div className="input-wrapper">
                    <input type="number" name="money" value={money} min={0} onChange={onMoneyChange}/>
                </div>
                <div className="input-wrapper">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

Form.propTypes = {
    categories: PropTypes.array.isRequired,
    updateSpends: PropTypes.func.isRequired,
};

export default Form
