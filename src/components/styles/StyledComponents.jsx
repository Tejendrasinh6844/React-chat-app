import { styled } from '@mui/material';


 const VisuallyHidden =styled("input")({
    position: "absolute",
    width: 1 ,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0
});

export default VisuallyHidden;