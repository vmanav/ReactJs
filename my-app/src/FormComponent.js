import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>

                <input
                    placeholder="First Name"
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                />
                <br />
                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                    placeholder="Age" />
                <br />

                Gender :
                <input
                    type="radio"
                    name="gender"
                    checked={props.data.gender === "Male"}
                    value="Male"
                    onChange={props.handleChange}
                />Male
                 <input
                    type="radio"
                    name="gender"
                    checked={props.data.gender === "Female"}
                    value="Female"
                    onChange={props.handleChange}
                />Female
                <br />

                Destination :
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Ladakh">Ladakh</option>
                </select>
                <br />

                Dietary Restrictions :
                <br />
                <input
                    type="checkbox"
                    name="isVegan"
                    checked={props.data.dietaryRestrictions.isVegan}
                    onChange={props.handleChange}
                />Vegan
                <br />
                <input
                    type="checkbox"
                    name="isKosher"
                    checked={props.data.dietaryRestrictions.isKosher}
                    onChange={props.handleChange}
                />Kosher
                <br />
                <input
                    type="checkbox"
                    name="isLactoseFree"
                    checked={props.data.dietaryRestrictions.isLactoseFree}
                    onChange={props.handleChange}
                />Lactose Free
                <br />

                <button>Submit</button>
            </form>

            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}.</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>

            <p>
                Your dietary restrictions:
                Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : " No"}
                <br />
                Kosher: {props.data.dietaryRestrictions.isKosher ? "Yes" : " No"}
                <br />
                Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : " No"}
                <br />
            </p>

        </main>
    )
}

export default FormComponent;