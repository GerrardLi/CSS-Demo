var initialData = [
    { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
    { name: "Speedy Coyote", sales: 89, price: 190.00 },
    { name: "Furious Lizard", sales: 152, price: 25.00 },
    { name: "Indifferent Monkey", sales: 1, price: 99.95 },
    { name: "Brooding Dragon", sales: 0, price: 6350 },
    { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
    { name: "Optimistic Snail", sales: 420, price: 1.50 }
];

var UserInfos = [
    { id: 1, name: "San ZHANG", age: "21", aclass: "1801" },
    { id: 2, name: "Si LI", age: "22", aclass: "1802" },
    { id: 3, name: "Wu WANG", age: "23", aclass: "1803" }
];

function ViewModel(items) {
    this.id = 88;
    this.name = ko.observable("Trans finder");
    this.president = {
        firstName: "Donald",
        lastName: "Trump"
    };

    this.UserInfos = ko.observableArray(items);
    this.initialData = ko.observableArray(initialData);
}

function PagedGridModel(items) {
    this.id = 88;
    this.name = ko.observable("Trans finder");
    this.items = ko.observableArray(items);

    this.president = {
        firstName: "Donald",
        lastName: "Trump"
    };

    this.gridViewModel = new ko.simpleGrid.viewModel({
        data: this.items,
        columns: [
            { headerText: "Item Name", rowText: "name" },
            { headerText: "Sales Count", rowText: "sales" },
            { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2); } }
        ],
        pageSize: 4
    });
}
document.addEventListener('DOMContentLoaded', function () {
    document.removeEventListener('DOMContentLoaded', arguments.callee, false);
    //ko.applyBindings(new ViewModelBiDirection());
    ko.applyBindings(new ViewModel(UserInfos));
    //ko.applyBindings(new ViewModel(initialData));
}, false);