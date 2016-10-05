import { Component, OnInit } from '@angular/core';
import { Motion } from './motion.model';

@Component({
    selector: 'my-motion',
    templateUrl: './motion.component.html',
    styleUrls: ['./motion.component.scss']
})
export class MotionComponent implements OnInit {
    categoryIncomes: string[] = ['Payroll', 'Sale', 'Interest', 'Tax'];
    categoryExpenses: string[] = ['Mortgage', 'Buy', 'Interest', 'Tax'];
    motion: Motion;
    motions: Motion[] = [];
    senseOrder: number = 1;
    incomes: number = 0;
    expenses: number = 0;
    balance: number = 0;

    constructor() {}
    ngOnInit(): void {
        this.motion = {
            _id: new Date().toDateString(),
            type: 'Income',
            category: 'Payroll',
            date: new Date(),
            amount: 0
        };
    }

    changeType(newType: string): void {
        if (newType === 'Income') {
            this.motion.type = 'Income';
            this.motion.category = 'Payroll';
        }else {
            this.motion.type = 'Expense';
            this.motion.category = 'Mortgage';
        }
    }

    saveMotion(): void {
        if (this.motion.type === 'Income') {
            this.incomes += this.motion.amount;
        }else {
            this.expenses += this.motion.amount;
        }
        this.balance += this.incomes - this.expenses;
        this.motions.push(Object.assign({}, this.motion));
    }

    sortBy(field: string) {
        this.senseOrder = -1 * this.senseOrder;
        this.motions.sort((a, b) => a[field] < b[field] ? this.senseOrder : -1 * this.senseOrder);
    }

    date(data: string): Date {
        return new Date(data);
    }
}
