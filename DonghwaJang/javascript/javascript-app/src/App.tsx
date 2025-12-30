import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowIswitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'


function App() {

  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
      
      </div>
    </>
  )
}

export default App 