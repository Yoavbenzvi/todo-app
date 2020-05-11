import React from 'react';
import InputField from '../components/InputField';
import Display from '../components/Display';
import ControlPanel from '../components/ControlPanel';

class App extends React.Component {

   state = {
      newTask: '',
      allTasks: [],
      showAll: true,
   }

   clearDisplay = () => {
      this.setState({
         newTask: '', 
         allTasks: [], 
         showAll: true,
      })
   }

   handleInputChange = (e) => {
      this.setState({newTask: e.target.value})
   }

   addTask = () => {
      if(this.state.newTask){
         let newTasksArray = [...this.state.allTasks, {text: this.state.newTask, status: true}];
         this.setState({
            allTasks: newTasksArray, 
            newTask: ''
         })
      }
   }

   toggleShow = (boolean) => {
      this.setState({showAll: boolean})
   }

   render() {
      return (
         <div className='bg-gray-800 text-white min-h-screen'>
            <div className='mx-auto w-1/3'>
               <h1 className='uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center'>
                  Todo List
               </h1>
               <InputField 
                  addTask={this.addTask} 
                  handleInputChange={this.handleInputChange}
                  inputValue={this.state.newTask}
               />
               <Display showAll={this.state.showAll} tasks={this.state.allTasks}/>
               <ControlPanel clearDisplay={this.clearDisplay} showAll={this.state.showAll} toggleShow={this.toggleShow}/>
            </div>
         </div>
      );   
   }
}

export default App;
