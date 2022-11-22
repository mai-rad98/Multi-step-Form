import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table'
import { Grid,Typography ,Paper} from '@mui/material';
 
function Pricing (){

  const paperStyle={padding :20,height:'70vh',width:1000, margin:"20px auto"} 
  
    return  (
      <Grid>
        <Grid>
          <Typography
          justifyContent={"center"}
          variant="h3">Pricing
          </Typography>
          <Typography variant="h6">
Build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization and reat-pricing-table</Typography>
        </Grid>
        <Grid><Paper elevation={14} style={paperStyle}>
          
          
        <PricingTable  highlightColor='#1976D2'>
     <PricingSlot   buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> <b>15</b> projects</PricingDetail>
        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
        <PricingDetail> <b>35</b> projects</PricingDetail>
        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
</PricingTable>
          
          </Paper>
          </Grid>
     

</Grid>
    )
  }

  export default Pricing
