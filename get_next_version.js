let get_next_version = function (previous_tag) {
    var buildArray = previous_tag.split(".");
    var lastElem = buildArray[buildArray.length - 1];
    var release = false;
    var release_string = lastElem.substring (lastElem.length,lastElem.length-2)
    if (release_string == '-r') {
       release = true;
       lastElem = lastElem.substring (0,lastElem.length-2);
    }
    var buildNumber = parseInt(lastElem);
    buildNumber += 1;
    buildArray[buildArray.length-1] = buildNumber;
    var nextVersion = buildArray.join(".")
    return nextVersion;
};

module.exports = get_next_version;
