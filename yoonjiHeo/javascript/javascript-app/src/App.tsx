import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { Firstproblem } from './problem/Firstproblem'

function App() {
  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <Firstproblem/>
        <ControlFlowSwitch/>
      </div>
    </>
  )
}

export default App
