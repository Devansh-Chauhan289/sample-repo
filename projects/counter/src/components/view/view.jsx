

export let countView = (state) => {

    function handleclick(){
        state.isincrementing = !state.isincrementing
    }

    return(
        <>
            <div >
                <h1>Counter</h1>
                <div>{state.count}</div>
                <div>
                <button id="decrement">-</button>
                <button id="increment">+</button>
                <button id="reset">Reset</button>
                </div>
                <div>

                <label htmlFor="auto-change">
          Auto Increment:
          <input type="checkbox" id="auto-change" checked={state.isAutoIncrementing} onChange={() => {}} />
        </label>
                </div>
            </div>
        </>
    )
}