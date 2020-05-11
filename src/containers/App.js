import React from 'react';
import InputField from '../components/InputField';
import Display from '../components/Display';
import ControlPanel from '../components/ControlPanel';

class App extends React.Component {

   state = {
      newTask: null,
      allTasks: [],
      displayedTasks: [],
   }

   clearDisplay = () => {
      // this.setState({newTask: null, tasks: []})
      console.log('clearDisplay')
   }

   handleInputChange = (e) => {
      // this.setState({newTask: e.target.value})
      console.log('handleInputChange')
   }

   addTask = () => {
      // let newTasksArray = [...this.state.allTasks];
      // newTasksArray.push({text: this.state.newTask, status: true})

      // this.setState({newTasksArray})
      console.log('addTask')
   }

   filterTasksArray = (all) => {
      // if(all) {
      //    const displayedTasks = [...this.state.allTasks]

      //    this.setState({displayedTasks})
      // } else {
      //    const displayedTasks = this.state.allTasks.filter(/*add filter method*/)

      //    this.setState({displayedTasks})
      // }
      console.log('filterTasksArray')
   }

   render() {
      return (
         <div className='bg-gray-800 text-white min-h-screen'>
            <div className='mx-auto w-1/3'>
               <h1 className='uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center'>
                  Todo List
               </h1>
               <InputField addTask={this.addTask} handleInputChange={this.handleInputChange}/>
               <Display tasks={this.state.displayedTasks}/>
               <ControlPanel clearDisplay={this.clearDisplay} filterTasksArray={this.filterTasksArray}/>
            </div>
         </div>
      );   
   }
}

export default App;
