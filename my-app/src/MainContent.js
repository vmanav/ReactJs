import React from 'react';

// Using Javascript in JSX
function MainContent() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "morning";
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    }
    else {
        timeOfDay = "night";
    }

    return (

        <main>
            <h3>
                <i>Good {timeOfDay}.</i>
            </h3>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse non risus in ante accumsan cursus laore.
            </div>
        </main>
    )
}

export default MainContent;