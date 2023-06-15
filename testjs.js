
let test = true;

function testFun() {
    client.echo("in test fun")
}

client.echo("Hello, World")
client.put("look")

variables["test"] = "test9"
client.echo("test var: " + variables["test"])

const matcher = new MatchList();
client.echo("created match list");

matcher.addMatch("test", testFun);
client.echo("added match");

const result = matcher.wait();
client.echo("got result");
result();

client.echo("done");

