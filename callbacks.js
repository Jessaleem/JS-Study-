$.get("http://example.com/", function(data){
  console.log(data);
});

console.log("This is printed first");

$.get("http://example.com/", function(data){
  db.find(data, function(result) {
    File.read(result, function(content) {
      File.save(content, function() {

      })
    })
  })
})