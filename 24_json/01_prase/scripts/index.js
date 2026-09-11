// parse: JSON -> JS Object
let result_from_server_as_string = `{
    "id" : 1,
    "description" : "description 1",
    "is_public" : true,
    "allowed_list" : ["like", "comment", "share"],
    "other_data": null
}
`;
console.log(result_from_server_as_string);

let result_as_object = JSON.parse(result_from_server_as_string);

console.log(result_as_object);


console.log("-------------------------------");

result_from_server_as_string = `[
{
    "id" : 1,
    "description" : "description 1",
    "is_public" : true,
    "allowed_list" : ["like", "comment", "share"],
    "other_data": null
},
{
    "id" : 2,
    "description" : "description 2",
    "is_public" : false,
    "allowed_list" : null,
    "other_data": null
}
]
`;

result_as_object = JSON.parse(result_from_server_as_string);

console.log(result_from_server_as_string);
console.log(result_as_object);
