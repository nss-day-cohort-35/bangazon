import React, { Component } from 'react';

export default class SideBar extends Component {
    state = {
        activeTitle: ""
    }

    employeeOptions = [
        {
            title: "Computers",
            link: "/employee-portal/computers"
        },
        {
            title: "Training",
            link: "/employee-portal/training"
        },
        {
            title: "Employees",
            link: "/employee-portal/employees"
        },
        {
            title: "Departments",
            link: "/employee-portal/departments"
        }
    ]

    customerOptions = [
        {
            title: "Customers",
            link: "/customer-portal/customers"
        },
        {
            title: "Products",
            link: "/customer-portal/products"
        },
        {
            title: "Orders",
            link: "/customer-portal/orders"
        },
        {
            title: "Payments",
            link: "/customer-portal/payments"
        }
    ]

    render() {
        return (
            <>
            <h2>SideBar</h2>
              <ul>
                {(this.props.view === "Employees") ?

                  this.employeeOptions.map((options, index) =>
                    <li key={index}><a href={options.link}>{options.title}</a></li>)
                      :
                this.customerOptions.map((options, index) =>
                    <li key={index}><a href={options.link}>{options.title}</a></li>)
                }
              </ul>
            </>
        )


    }
}