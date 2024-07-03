import { useState, useEffect } from 'react'
import './style.scss'

function Form({spends, updateSpends}) {
    const [items, setItems] = useState([])
    const [category, setCategory] = useState('')
    const [money, setMoney] = useState(0)
    
    useEffect(() => {
        setItems(spends)
    }, [spends])


    function onCategoryChange(e) {
        setCategory(e.target.value)
    }

    function onMoneyChange(e) {
        setMoney(+e.target.value)
    }

    function onFormSubmit(e) {
        e.preventDefault()

        if (category === '') return

        const updatedItems = items.map(item => {
            if (String(item.id) === String(category)) {
                const updatedItem = { ...item, spent: item.spent + money };
                return updatedItem;
            } else {
                return item;
            }
        });

        updateSpends(updatedItems);
        setMoney(0);
    }

    const options = items.map(item => {
        return (
            <option value={item.id} key={item.id}>{item.id}</option>
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

export default Form
