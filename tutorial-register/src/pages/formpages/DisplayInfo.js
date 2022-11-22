import React ,{useContext}from 'react'
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from '@mui/material'
import {multiStepContext} from '../../StepContext'


function DisplayInfo() {

    const {finalData} = useContext(multiStepContext);
  return (
    <div>
    <TableContainer style={{display:'flex',justifyContent:'center'}}>
        <Table  border='10' style={{width:'90%',justifyContext:'center'}} size='small' aria-label="caption table">
            <TableHead>
                <TableRow style={{backgroundcolor:'burlywood', color:'aliceblue'}}>
                    <TableCell>FIRSTNAME</TableCell>
                    
                    <TableCell>LASTNAME</TableCell>
                    
                    <TableCell>EMAIL</TableCell>
                    
                    <TableCell>EMAIL2</TableCell>
                    
                    <TableCell>USERNAME</TableCell>
                    
                    <TableCell>NATIONALITY</TableCell>
                    
                    <TableCell>GENDER</TableCell>
                    
                    <TableCell>ADDRESS</TableCell>
                    
                    <TableCell>DATE</TableCell>
                    
                    <TableCell>ANY-INFO</TableCell>
                
                
                </TableRow>
            </TableHead>

            <TableBody>
                {finalData.map((data) => (
                <TableRow key={data.email}>
                <TableCell>{data.firstName}</TableCell>
                    
                    <TableCell>{data.lastName}</TableCell>
                    
                    <TableCell>{data.email}</TableCell>
                    
                    <TableCell>{data.email1}</TableCell>
                    
                    <TableCell>{data.userName}</TableCell>
                    
                    <TableCell>{data.nationality}</TableCell>
                    
                    <TableCell>{data.gender}</TableCell>
                    
                    <TableCell>{data.address}</TableCell>
                    
                    <TableCell>{data.date}</TableCell>
                    
                    <TableCell>{data.info}</TableCell>

                </TableRow>
                ))}
            </TableBody>
            
        </Table>
    </TableContainer>

    </div>
  )
}

export default DisplayInfo