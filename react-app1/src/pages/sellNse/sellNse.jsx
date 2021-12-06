import './sellNse.css'

export default function SellNse() {
    return (
        <div className="sellNse">
            <div class="container">
                <form>
                    <div class="row">
                    <div class="col-25">
                        <label for="fname">Lots</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lots" name="lots" placeholder="Lots." />
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="lname">Price</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="price" name="prive" placeholder="Price"/>
                    </div>
                    </div>
                    <br/>
                    <div class="row">
                    <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Bid: 14528</td>
                            <td></td>
                            <td>Ask: 14528</td>
                        </tr>
                        <tr>
                            <td>Last: 14528</td>
                            <td></td>
                            <td>Change: 14528</td>
                        </tr>
                        <tr>
                            <td>High: 14528</td>
                            <td></td>
                            <td>Low: 14528</td>
                        </tr>
                        <tr>
                            <td>Open: 14528</td>
                            <td></td>
                            <td>Close: 14528</td>
                        </tr>
                        <tr>
                            <td>Volume: 14528</td>
                            <td></td>
                            <td>Open Interest: 14528</td>
                        </tr>
                        <tr>
                            <td>Upper Ckt: 14528</td>
                            <td></td>
                            <td>Lower Ckt: 14528</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
