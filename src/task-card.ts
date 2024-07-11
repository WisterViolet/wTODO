import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Task } from './types/task'

@customElement('task-card')
export class TaskCard extends LitElement{
    static styles = css`
        :host{
            width: 80%;
            max-width: 300px;
            height: auto;
            padding: 0px;
        }
        .card{
            width: 100%;
            height: 100%;
            padding: 12px;
            border-radius: 30px;
            background-color: #4c4d58;
        }

        .name{
            color: #b3b2a7;
            font-size: 3rem;
            margin: 1px auto 3px;
        }

        .limit{
            color: #b3b2a7;
            font-size: 1.5rem;
            margin: 3px auto 1px;
        }
    `

    @property({type: Object})
    task:Task = {
        id:0,
        name:'Task',
        description:'',
        category: {
            id:0,
            name:'',
        }
    }

    render(){
        return html`
            <div class='card'>
                <p class='name'>${this.task.name}</p>
                <p class='limit'>${this.task.limit ?? 'No Deadline'}</p>
            </div>
        `;
    }
}