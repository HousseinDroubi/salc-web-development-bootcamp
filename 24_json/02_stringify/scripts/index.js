// stringify: JSON -> JS Object
let result_from_frontend_to_be_sent_to_server = {
    id : 1,
    description : "description 1",
    is_public : true,
    allowed_list : ["like", "comment", "share"],
    other_data: null
};

console.log(result_from_frontend_to_be_sent_to_server);

let result_as_as_string = JSON.stringify(result_from_frontend_to_be_sent_to_server);

console.log(result_as_as_string);


console.log("-------------------------------");

result_from_frontend_to_be_sent_to_server = [
{
    id : 1,
    description : "description 1",
    is_public : true,
    allowed_list : ["like", "comment", "share"],
    other_data: null
},
{
    id : 2,
    description : "description 2",
    is_public : false,
    allowed_list : null,
    other_data: null
}
];

result_as_string = JSON.stringify(result_from_frontend_to_be_sent_to_server);

console.log(result_from_frontend_to_be_sent_to_server);
console.log(result_as_string);