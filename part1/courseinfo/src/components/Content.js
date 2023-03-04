import React from "react"
import Part from "./Part";

const Content = ({parts}) => {
  
    return (

        <div>
            {/*
                <Part part={props.parts[0].name} excercise = {props.parts[0].excercises} />
                <Part part={props.parts[1].name} excercise = {props.parts[1].excercises} />
                <Part part={props.parts[2].name} excercise = {props.parts[2].excercises} />
            */}

            {/* Using map to render Part component for each part*/}

            {parts.map((part,idx) =>
                <Part key={idx} part={part.name} excercises={part.excercises}/>

            )}
            
        </div>
    )
}


export default Content;