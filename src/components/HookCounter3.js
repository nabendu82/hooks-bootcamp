import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>First name - {name.firstName}</h2>
            <h2>Last name - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounter3