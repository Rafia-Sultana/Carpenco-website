import React from 'react';

const Blog = () => {
    return (
        <div class="card row row-cols-1 row-cols-md-3 g-4 gap-4 m-20 ">

            <div class="card-body bg-base-100 border-2 border-indigo-600 shadow-xl">
                <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                <p>
                    <li>1. We need to make sure that components receive only necessary props to optimize React rendering which can control the CPU consumption and avoid over-rendering unnecessary features. </li>
                    <li>2.We need to avoid inline functions as much as possible.</li>
                    <li>3.Rendering hidden components like Modals and Dropdowns conditionally.</li>
                    <li>4.Calling multiple APIs parallelly.</li>
                    <li>5.By using immutable data structures</li>
                </p>

            </div>
            <div class="card-body bg-base-100 border-2 border-indigo-600 shadow-xl">
                <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                <p>
                    Unit testing is a way to testthe smallest components of your software or the smallest piece of code.
                    Developers write unit test which helps with:

                    <li> maintaining and reusing code.</li>
                    <li> lower the potentially harmful impact of changes to the code</li>
                    <li>solves poor code quality.</li>
                </p>

            </div>
            <div class="card-body bg-base-100 border-2 border-indigo-600 shadow-xl">
                <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                <p>
                    There are four main types of state that should need to properly manage in React apps:

                    1. Local state that is most often managed in React using the useState hook.
                    2. Global state which is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    3. Server state is  data that comes from an external server and integrated with our UI state.
                    4. URL state that includes the pathname and query parameters.
                </p>

            </div>
            <div class="card-body bg-base-100 border-2 border-indigo-600 shadow-xl">
                <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>
                    We don't use set directly because the data will change in state..If we set the data directly in route then previous data will  copied in the state.For that we cant change it .Thats why we use ,const [products, setProducts] = useState([]). but not set products = [...]
                </p>
            </div>
            <div class="card-body bg-base-100 border-2 border-indigo-600 shadow-xl">
                <h2 class="card-title">How does prototypical inheritance work?</h2>
                <p>
                    prototypical inheritance makes us understand  the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. By inheriting properties from a prototype, Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>

            </div>
        </div>
    );
};

export default Blog;