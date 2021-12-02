module Main exposing (main)

import Dict
import Html exposing (Html)
import Html.Attributes exposing (attribute, property)
import Json.Encode as Encode


main : Html msg
main =
    Html.node "google-chart"
        [ attribute "type" "pie"
        , property "options" <|
            Encode.object [ ( "title", Encode.string "Distribution of days in 2001Q1" ) ]
        , property "cols" <|
            Encode.list Encode.object
                [ [ ( "label", Encode.string "Month" ), ( "type", Encode.string "string" ) ]
                , [ ( "label", Encode.string "Days" ), ( "type", Encode.string "number" ) ]
                ]
        , property "rows" <|
            Encode.list (Encode.list identity) <|
                [ [ Encode.string "Jan", Encode.int 31 ]
                , [ Encode.string "Feb", Encode.int 28 ]
                , [ Encode.string "Mar", Encode.int 41 ]
                ]
        ]
        []
