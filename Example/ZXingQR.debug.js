//! ZXingQR.debug.js
//

(function() {

////////////////////////////////////////////////////////////////////////////////
// RGBLuminanceSource

window.RGBLuminanceSource = function RGBLuminanceSource(d, W, H) {
    RGBLuminanceSource.initializeBase(this, [ W, H ]);
    this.__width$1 = W;
    this.__height$1 = H;
    var width = W;
    var height = H;
    this._luminances$1 = new Array(width * height);
    for (var y = 0; y < height; y++) {
        var offset = y * width;
        for (var x = 0; x < width; x++) {
            var r = d[offset * 4 + x * 4];
            var g = d[offset * 4 + x * 4 + 1];
            var b = d[offset * 4 + x * 4 + 2];
            if (r === g && g === b) {
                this._luminances$1[offset + x] = r;
            }
            else {
                this._luminances$1[offset + x] = ((r + g + g + b) >> 2);
            }
        }
    }
}
RGBLuminanceSource.prototype = {
    _luminances$1: null,
    _isRotated$1: false,
    __isRegionSelect$1: false,
    __Region$1: null,
    
    get_height: function RGBLuminanceSource$get_height() {
        if (!this._isRotated$1) {
            return this.__height$1;
        }
        else {
            return this.__width$1;
        }
    },
    
    get_width: function RGBLuminanceSource$get_width() {
        if (!this._isRotated$1) {
            return this.__width$1;
        }
        else {
            return this.__height$1;
        }
    },
    
    __height$1: 0,
    __width$1: 0,
    
    getRow: function RGBLuminanceSource$getRow(y, row) {
        if (!this._isRotated$1) {
            var width = this.get_width();
            if (row == null || row.length < width) {
                row = new Array(width);
            }
            for (var i = 0; i < width; i++) {
                row[i] = this._luminances$1[y * width + i];
            }
            return row;
        }
        else {
            var width = this.__width$1;
            var height = this.__height$1;
            if (row == null || row.length < height) {
                row = new Array(height);
            }
            for (var i = 0; i < height; i++) {
                row[i] = this._luminances$1[i * width + y];
            }
            return row;
        }
    },
    
    get_matrix: function RGBLuminanceSource$get_matrix() {
        return this._luminances$1;
    },
    
    crop: function RGBLuminanceSource$crop(left, top, width, height) {
        return RGBLuminanceSource.callBaseMethod(this, 'crop', [ left, top, width, height ]);
    },
    
    rotateCounterClockwise: function RGBLuminanceSource$rotateCounterClockwise() {
        this._isRotated$1 = true;
        return this;
    },
    
    get_rotateSupported: function RGBLuminanceSource$get_rotateSupported() {
        return true;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SupportClass

window.SupportClass = function SupportClass() {
}
SupportClass.toByteArray1 = function SupportClass$toByteArray1(sbyteArray) {
    var byteArray = null;
    if (sbyteArray != null) {
        byteArray = new Array(sbyteArray.length);
        for (var index = 0; index < sbyteArray.length; index++) {
            byteArray[index] = sbyteArray[index];
        }
    }
    return byteArray;
}
SupportClass.toByteArray2 = function SupportClass$toByteArray2(sourceString) {
    throw new Error('NotImplementedException');
}
SupportClass.toByteArray3 = function SupportClass$toByteArray3(tempObjectArray) {
    var byteArray = null;
    if (tempObjectArray != null) {
        byteArray = new Array(tempObjectArray.length);
        for (var index = 0; index < tempObjectArray.length; index++) {
            byteArray[index] = tempObjectArray[index];
        }
    }
    return byteArray;
}
SupportClass.urShift1 = function SupportClass$urShift1(number, bits) {
    if (number >= 0) {
        return number >> bits;
    }
    else {
        return (number >> bits) + (2 << ~bits);
    }
}
SupportClass.urShift2 = function SupportClass$urShift2(number, bits) {
    return SupportClass.urShift1(number, bits);
}
SupportClass.urShift3 = function SupportClass$urShift3(number, bits) {
    if (number >= 0) {
        return number >> bits;
    }
    else {
        return (number >> bits) + (2 << ~bits);
    }
}
SupportClass.urShift4 = function SupportClass$urShift4(number, bits) {
    return SupportClass.urShift3(number, bits);
}
SupportClass.identity1 = function SupportClass$identity1(literal) {
    return literal;
}
SupportClass.identity2 = function SupportClass$identity2(literal) {
    return literal;
}
SupportClass.identity3 = function SupportClass$identity3(literal) {
    return literal;
}
SupportClass.identity4 = function SupportClass$identity4(literal) {
    return literal;
}
SupportClass.getCharsFromString = function SupportClass$getCharsFromString(sourceString, sourceStart, sourceEnd, destinationArray, destinationStart) {
    var sourceCounter;
    var destinationCounter;
    sourceCounter = sourceStart;
    destinationCounter = destinationStart;
    while (sourceCounter < sourceEnd) {
        destinationArray[destinationCounter] = sourceString.charAt(sourceCounter);
        sourceCounter++;
        destinationCounter++;
    }
}
SupportClass.setCapacity = function SupportClass$setCapacity(vector, newCapacity) {
    if (newCapacity > vector.length) {
        vector.addRange(new Array(newCapacity - vector.length));
    }
    else if (newCapacity < vector.length) {
        vector.removeRange(newCapacity, vector.length - newCapacity);
    }
}
SupportClass.toSByteArray = function SupportClass$toSByteArray(byteArray) {
    var sbyteArray = null;
    if (byteArray != null) {
        sbyteArray = new Array(byteArray.length);
        for (var index = 0; index < byteArray.length; index++) {
            sbyteArray[index] = byteArray[index];
        }
    }
    return sbyteArray;
}


Type.registerNamespace('com.google.zxing.client.result');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._abstractDoCoMoResultParser

com.google.zxing.client.result._abstractDoCoMoResultParser = function com_google_zxing_client_result__abstractDoCoMoResultParser() {
    com.google.zxing.client.result._abstractDoCoMoResultParser.initializeBase(this);
}
com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField = function com_google_zxing_client_result__abstractDoCoMoResultParser$_matchDoCoMoPrefixedField(prefix, rawText, trim) {
    return com.google.zxing.client.result.ResultParser._matchPrefixedField(prefix, rawText, ';', trim);
}
com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField = function com_google_zxing_client_result__abstractDoCoMoResultParser$_matchSingleDoCoMoPrefixedField(prefix, rawText, trim) {
    return com.google.zxing.client.result.ResultParser._matchSinglePrefixedField(prefix, rawText, ';', trim);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._addressBookAUResultParser

com.google.zxing.client.result._addressBookAUResultParser = function com_google_zxing_client_result__addressBookAUResultParser() {
    com.google.zxing.client.result._addressBookAUResultParser.initializeBase(this);
}
com.google.zxing.client.result._addressBookAUResultParser.parse = function com_google_zxing_client_result__addressBookAUResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || rawText.indexOf('MEMORY') < 0 || rawText.indexOf('\r\n') < 0) {
        return null;
    }
    var name = com.google.zxing.client.result.ResultParser._matchSinglePrefixedField('NAME1:', rawText, '\r', true);
    var pronunciation = com.google.zxing.client.result.ResultParser._matchSinglePrefixedField('NAME2:', rawText, '\r', true);
    var phoneNumbers = com.google.zxing.client.result._addressBookAUResultParser._matchMultipleValuePrefix$1('TEL', 3, rawText, true);
    var emails = com.google.zxing.client.result._addressBookAUResultParser._matchMultipleValuePrefix$1('MAIL', 3, rawText, true);
    var note = com.google.zxing.client.result.ResultParser._matchSinglePrefixedField('MEMORY:', rawText, '\r', false);
    var address = com.google.zxing.client.result.ResultParser._matchSinglePrefixedField('ADD:', rawText, '\r', true);
    var addresses = (address == null) ? null : [ address ];
    return new com.google.zxing.client.result.AddressBookParsedResult(com.google.zxing.client.result.ResultParser.maybeWrap(name), pronunciation, phoneNumbers, emails, note, addresses, null, null, null, null);
}
com.google.zxing.client.result._addressBookAUResultParser._matchMultipleValuePrefix$1 = function com_google_zxing_client_result__addressBookAUResultParser$_matchMultipleValuePrefix$1(prefix, max, rawText, trim) {
    var values = null;
    for (var i = 1; i <= max; i++) {
        var value_Renamed = com.google.zxing.client.result.ResultParser._matchSinglePrefixedField(prefix + i + ':', rawText, '\r', trim);
        if (value_Renamed == null) {
            break;
        }
        if (values == null) {
            values = [];
        }
        values.add(value_Renamed);
    }
    if (values == null) {
        return null;
    }
    return com.google.zxing.client.result.ResultParser._toStringArray(values);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._addressBookDoCoMoResultParser

com.google.zxing.client.result._addressBookDoCoMoResultParser = function com_google_zxing_client_result__addressBookDoCoMoResultParser() {
    com.google.zxing.client.result._addressBookDoCoMoResultParser.initializeBase(this);
}
com.google.zxing.client.result._addressBookDoCoMoResultParser.parse = function com_google_zxing_client_result__addressBookDoCoMoResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || !rawText.startsWith('MECARD:')) {
        return null;
    }
    var rawName = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('N:', rawText, true);
    if (rawName == null) {
        return null;
    }
    var name = com.google.zxing.client.result._addressBookDoCoMoResultParser._parseName$2(rawName[0]);
    var pronunciation = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('SOUND:', rawText, true);
    var phoneNumbers = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('TEL:', rawText, true);
    var emails = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('EMAIL:', rawText, true);
    var note = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('NOTE:', rawText, false);
    var addresses = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('ADR:', rawText, true);
    var birthday = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('BDAY:', rawText, true);
    if (birthday != null && !com.google.zxing.client.result.ResultParser.isStringOfDigits(birthday, 8)) {
        birthday = null;
    }
    var url = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('URL:', rawText, true);
    var org = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('ORG:', rawText, true);
    return new com.google.zxing.client.result.AddressBookParsedResult(com.google.zxing.client.result.ResultParser.maybeWrap(name), pronunciation, phoneNumbers, emails, note, addresses, org, birthday, null, url);
}
com.google.zxing.client.result._addressBookDoCoMoResultParser._parseName$2 = function com_google_zxing_client_result__addressBookDoCoMoResultParser$_parseName$2(name) {
    var comma = name.indexOf(',');
    if (comma >= 0) {
        return name.substr(comma + 1) + ' ' + name.substr(0, comma - (0));
    }
    return name;
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.AddressBookParsedResult

com.google.zxing.client.result.AddressBookParsedResult = function com_google_zxing_client_result_AddressBookParsedResult(names, pronunciation, phoneNumbers, emails, note, addresses, org, birthday, title, url) {
    com.google.zxing.client.result.AddressBookParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.ADDRESSBOOK ]);
    this._names$1 = names;
    this._pronunciation$1 = pronunciation;
    this._phoneNumbers$1 = phoneNumbers;
    this._emails$1 = emails;
    this._note$1 = note;
    this._addresses$1 = addresses;
    this._org$1 = org;
    this._birthday$1 = birthday;
    this._title$1 = title;
    this._url$1 = url;
}
com.google.zxing.client.result.AddressBookParsedResult.prototype = {
    
    get_names: function com_google_zxing_client_result_AddressBookParsedResult$get_names() {
        return this._names$1;
    },
    
    get_pronunciation: function com_google_zxing_client_result_AddressBookParsedResult$get_pronunciation() {
        return this._pronunciation$1;
    },
    
    get_phoneNumbers: function com_google_zxing_client_result_AddressBookParsedResult$get_phoneNumbers() {
        return this._phoneNumbers$1;
    },
    
    get_emails: function com_google_zxing_client_result_AddressBookParsedResult$get_emails() {
        return this._emails$1;
    },
    
    get_note: function com_google_zxing_client_result_AddressBookParsedResult$get_note() {
        return this._note$1;
    },
    
    get_addresses: function com_google_zxing_client_result_AddressBookParsedResult$get_addresses() {
        return this._addresses$1;
    },
    
    get_title: function com_google_zxing_client_result_AddressBookParsedResult$get_title() {
        return this._title$1;
    },
    
    get_org: function com_google_zxing_client_result_AddressBookParsedResult$get_org() {
        return this._org$1;
    },
    
    get_URL: function com_google_zxing_client_result_AddressBookParsedResult$get_URL() {
        return this._url$1;
    },
    
    get_birthday: function com_google_zxing_client_result_AddressBookParsedResult$get_birthday() {
        return this._birthday$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_AddressBookParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend2(this._names$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._pronunciation$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._title$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._org$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend2(this._addresses$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend2(this._phoneNumbers$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend2(this._emails$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._url$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._birthday$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._note$1, result);
        return result.toString();
    },
    
    _names$1: null,
    _pronunciation$1: null,
    _phoneNumbers$1: null,
    _emails$1: null,
    _note$1: null,
    _addresses$1: null,
    _org$1: null,
    _birthday$1: null,
    _title$1: null,
    _url$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._bizcardResultParser

com.google.zxing.client.result._bizcardResultParser = function com_google_zxing_client_result__bizcardResultParser() {
    com.google.zxing.client.result._bizcardResultParser.initializeBase(this);
}
com.google.zxing.client.result._bizcardResultParser.parse = function com_google_zxing_client_result__bizcardResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || !rawText.startsWith('BIZCARD:')) {
        return null;
    }
    var firstName = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('N:', rawText, true);
    var lastName = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('X:', rawText, true);
    var fullName = com.google.zxing.client.result._bizcardResultParser._buildName$2(firstName, lastName);
    var title = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('T:', rawText, true);
    var org = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('C:', rawText, true);
    var addresses = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('A:', rawText, true);
    var phoneNumber1 = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('B:', rawText, true);
    var phoneNumber2 = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('M:', rawText, true);
    var phoneNumber3 = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('F:', rawText, true);
    var email = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('E:', rawText, true);
    return new com.google.zxing.client.result.AddressBookParsedResult(com.google.zxing.client.result.ResultParser.maybeWrap(fullName), null, com.google.zxing.client.result._bizcardResultParser._buildPhoneNumbers$2(phoneNumber1, phoneNumber2, phoneNumber3), com.google.zxing.client.result.ResultParser.maybeWrap(email), null, addresses, org, null, title, null);
}
com.google.zxing.client.result._bizcardResultParser._buildPhoneNumbers$2 = function com_google_zxing_client_result__bizcardResultParser$_buildPhoneNumbers$2(number1, number2, number3) {
    var numbers = [];
    if (number1 != null) {
        numbers.add(number1);
    }
    if (number2 != null) {
        numbers.add(number2);
    }
    if (number3 != null) {
        numbers.add(number3);
    }
    var size = numbers.length;
    if (!size) {
        return null;
    }
    var result = new Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = (numbers[i]);
    }
    return result;
}
com.google.zxing.client.result._bizcardResultParser._buildName$2 = function com_google_zxing_client_result__bizcardResultParser$_buildName$2(firstName, lastName) {
    if (firstName == null) {
        return lastName;
    }
    else {
        return (lastName == null) ? firstName : firstName + ' ' + lastName;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._bookmarkDoCoMoResultParser

com.google.zxing.client.result._bookmarkDoCoMoResultParser = function com_google_zxing_client_result__bookmarkDoCoMoResultParser() {
    com.google.zxing.client.result._bookmarkDoCoMoResultParser.initializeBase(this);
}
com.google.zxing.client.result._bookmarkDoCoMoResultParser.parse = function com_google_zxing_client_result__bookmarkDoCoMoResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || !rawText.startsWith('MEBKM:')) {
        return null;
    }
    var title = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('TITLE:', rawText, true);
    var rawUri = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('URL:', rawText, true);
    if (rawUri == null) {
        return null;
    }
    var uri = rawUri[0];
    if (!com.google.zxing.client.result._uriResultParser._isBasicallyValidURI(uri)) {
        return null;
    }
    return new com.google.zxing.client.result.URIParsedResult(uri, title);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.CalendarParsedResult

com.google.zxing.client.result.CalendarParsedResult = function com_google_zxing_client_result_CalendarParsedResult(summary, start, end, location, attendee, title) {
    com.google.zxing.client.result.CalendarParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.CALENDAR ]);
    if (start == null) {
        throw new Error('ArgumentException');
    }
    com.google.zxing.client.result.CalendarParsedResult._validateDate$1(start);
    com.google.zxing.client.result.CalendarParsedResult._validateDate$1(end);
    this._summary$1 = summary;
    this._start$1 = start;
    this._end$1 = end;
    this._location$1 = location;
    this._attendee$1 = attendee;
    this._title$1 = title;
}
com.google.zxing.client.result.CalendarParsedResult._validateDate$1 = function com_google_zxing_client_result_CalendarParsedResult$_validateDate$1(date) {
    if (date != null) {
        var length = date.length;
        if (length !== 8 && length !== 15 && length !== 16) {
            throw new Error('ArgumentException');
        }
        for (var i = 0; i < 8; i++) {
            if (!SystemExtend.CharExtend.isDigit(date.charAt(i))) {
                throw new Error('ArgumentException');
            }
        }
        if (length > 8) {
            if (date.charAt(8) !== 'T') {
                throw new Error('ArgumentException');
            }
            for (var i = 9; i < 15; i++) {
                if (!SystemExtend.CharExtend.isDigit(date.charAt(i))) {
                    throw new Error('ArgumentException');
                }
            }
            if (length === 16 && date.charAt(15) !== 'Z') {
                throw new Error('ArgumentException');
            }
        }
    }
}
com.google.zxing.client.result.CalendarParsedResult.prototype = {
    
    get_summary: function com_google_zxing_client_result_CalendarParsedResult$get_summary() {
        return this._summary$1;
    },
    
    get_start: function com_google_zxing_client_result_CalendarParsedResult$get_start() {
        return this._start$1;
    },
    
    get_end: function com_google_zxing_client_result_CalendarParsedResult$get_end() {
        return this._end$1;
    },
    
    get_location: function com_google_zxing_client_result_CalendarParsedResult$get_location() {
        return this._location$1;
    },
    
    get_attendee: function com_google_zxing_client_result_CalendarParsedResult$get_attendee() {
        return this._attendee$1;
    },
    
    get_title: function com_google_zxing_client_result_CalendarParsedResult$get_title() {
        return this._title$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_CalendarParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._summary$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._start$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._end$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._location$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._attendee$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._title$1, result);
        return result.toString();
    },
    
    _summary$1: null,
    _start$1: null,
    _end$1: null,
    _location$1: null,
    _attendee$1: null,
    _title$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.EmailAddressParsedResult

com.google.zxing.client.result.EmailAddressParsedResult = function com_google_zxing_client_result_EmailAddressParsedResult(emailAddress, subject, body, mailtoURI) {
    com.google.zxing.client.result.EmailAddressParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.emaiL_ADDRESS ]);
    this._emailAddress$1 = emailAddress;
    this._subject$1 = subject;
    this._body$1 = body;
    this._mailtoURI$1 = mailtoURI;
}
com.google.zxing.client.result.EmailAddressParsedResult.prototype = {
    
    get_emailAddress: function com_google_zxing_client_result_EmailAddressParsedResult$get_emailAddress() {
        return this._emailAddress$1;
    },
    
    get_subject: function com_google_zxing_client_result_EmailAddressParsedResult$get_subject() {
        return this._subject$1;
    },
    
    get_body: function com_google_zxing_client_result_EmailAddressParsedResult$get_body() {
        return this._body$1;
    },
    
    get_mailtoURI: function com_google_zxing_client_result_EmailAddressParsedResult$get_mailtoURI() {
        return this._mailtoURI$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_EmailAddressParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._emailAddress$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._subject$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._body$1, result);
        return result.toString();
    },
    
    _emailAddress$1: null,
    _subject$1: null,
    _body$1: null,
    _mailtoURI$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._emailAddressResultParser

com.google.zxing.client.result._emailAddressResultParser = function com_google_zxing_client_result__emailAddressResultParser() {
    com.google.zxing.client.result._emailAddressResultParser.initializeBase(this);
}
com.google.zxing.client.result._emailAddressResultParser.parse = function com_google_zxing_client_result__emailAddressResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null) {
        return null;
    }
    var emailAddress;
    if (rawText.startsWith('mailto:') || rawText.startsWith('MAILTO:')) {
        emailAddress = rawText.substr(7);
        var queryStart = emailAddress.indexOf('?');
        if (queryStart >= 0) {
            emailAddress = emailAddress.substr(0, queryStart - (0));
        }
        var nameValues = com.google.zxing.client.result.ResultParser._parseNameValuePairs(rawText);
        var subject = null;
        var body = null;
        if (nameValues != null) {
            if (!emailAddress.length) {
                emailAddress = nameValues['to'];
            }
            subject = nameValues['subject'];
            body = nameValues['body'];
        }
        return new com.google.zxing.client.result.EmailAddressParsedResult(emailAddress, subject, body, rawText);
    }
    else {
        if (!com.google.zxing.client.result._emailDoCoMoResultParser._isBasicallyValidEmailAddress(rawText)) {
            return null;
        }
        emailAddress = rawText;
        return new com.google.zxing.client.result.EmailAddressParsedResult(emailAddress, null, null, 'mailto:' + emailAddress);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._emailDoCoMoResultParser

com.google.zxing.client.result._emailDoCoMoResultParser = function com_google_zxing_client_result__emailDoCoMoResultParser() {
    com.google.zxing.client.result._emailDoCoMoResultParser.initializeBase(this);
}
com.google.zxing.client.result._emailDoCoMoResultParser.parse = function com_google_zxing_client_result__emailDoCoMoResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || !rawText.startsWith('MATMSG:')) {
        return null;
    }
    var rawTo = com.google.zxing.client.result._abstractDoCoMoResultParser._matchDoCoMoPrefixedField('TO:', rawText, true);
    if (rawTo == null) {
        return null;
    }
    var to = rawTo[0];
    if (!com.google.zxing.client.result._emailDoCoMoResultParser._isBasicallyValidEmailAddress(to)) {
        return null;
    }
    var subject = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('SUB:', rawText, false);
    var body = com.google.zxing.client.result._abstractDoCoMoResultParser._matchSingleDoCoMoPrefixedField('BODY:', rawText, false);
    return new com.google.zxing.client.result.EmailAddressParsedResult(to, subject, body, 'mailto:' + to);
}
com.google.zxing.client.result._emailDoCoMoResultParser._isBasicallyValidEmailAddress = function com_google_zxing_client_result__emailDoCoMoResultParser$_isBasicallyValidEmailAddress(email) {
    if (email == null) {
        return false;
    }
    var atFound = false;
    for (var i = 0; i < email.length; i++) {
        var c = email.charAt(i);
        if ((SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('a') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('z')) && (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('A') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('Z')) && (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('0') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('9')) && !com.google.zxing.client.result._emailDoCoMoResultParser._isAtextSymbol$2(c)) {
            return false;
        }
        if (c === '@') {
            if (atFound) {
                return false;
            }
            atFound = true;
        }
    }
    return atFound;
}
com.google.zxing.client.result._emailDoCoMoResultParser._isAtextSymbol$2 = function com_google_zxing_client_result__emailDoCoMoResultParser$_isAtextSymbol$2(c) {
    for (var i = 0; i < com.google.zxing.client.result._emailDoCoMoResultParser._atexT_SYMBOLS$2.length; i++) {
        if (c === com.google.zxing.client.result._emailDoCoMoResultParser._atexT_SYMBOLS$2[i]) {
            return true;
        }
    }
    return false;
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.GeoParsedResult

com.google.zxing.client.result.GeoParsedResult = function com_google_zxing_client_result_GeoParsedResult(geoURI, latitude, longitude, altitude) {
    com.google.zxing.client.result.GeoParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.GEO ]);
    this._geoURI$1 = geoURI;
    this._latitude$1 = latitude;
    this._longitude$1 = longitude;
    this._altitude$1 = altitude;
}
com.google.zxing.client.result.GeoParsedResult.prototype = {
    
    get_geoURI: function com_google_zxing_client_result_GeoParsedResult$get_geoURI() {
        return this._geoURI$1;
    },
    
    get_latitude: function com_google_zxing_client_result_GeoParsedResult$get_latitude() {
        return this._latitude$1;
    },
    
    get_longitude: function com_google_zxing_client_result_GeoParsedResult$get_longitude() {
        return this._longitude$1;
    },
    
    get_altitude: function com_google_zxing_client_result_GeoParsedResult$get_altitude() {
        return this._altitude$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_GeoParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        result.append(this._latitude$1);
        result.append(', ');
        result.append(this._longitude$1);
        if (this._altitude$1 > 0) {
            result.append(', ');
            result.append(this._altitude$1);
            result.append('m');
        }
        return result.toString();
    },
    
    _geoURI$1: null,
    _latitude$1: 0,
    _longitude$1: 0,
    _altitude$1: 0
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._geoResultParser

com.google.zxing.client.result._geoResultParser = function com_google_zxing_client_result__geoResultParser() {
    com.google.zxing.client.result._geoResultParser.initializeBase(this);
}
com.google.zxing.client.result._geoResultParser.parse = function com_google_zxing_client_result__geoResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || (!rawText.startsWith('geo:') && !rawText.startsWith('GEO:'))) {
        return null;
    }
    var queryStart = rawText.indexOf('?', 4);
    var geoURIWithoutQuery = (queryStart < 0) ? rawText.substr(4) : rawText.substr(4, queryStart - (4));
    var latitudeEnd = geoURIWithoutQuery.indexOf(',');
    if (latitudeEnd < 0) {
        return null;
    }
    var longitudeEnd = geoURIWithoutQuery.indexOf(',', latitudeEnd + 1);
    var latitude, longitude, altitude;
    try {
        latitude = parseFloat(geoURIWithoutQuery.substr(0, latitudeEnd - (0)));
        if (longitudeEnd < 0) {
            longitude = parseFloat(geoURIWithoutQuery.substr(latitudeEnd + 1));
            altitude = 0;
        }
        else {
            longitude = parseFloat(geoURIWithoutQuery.substr(latitudeEnd + 1, longitudeEnd - (latitudeEnd + 1)));
            altitude = parseFloat(geoURIWithoutQuery.substr(longitudeEnd + 1));
        }
    }
    catch ($e1) {
        return null;
    }
    return new com.google.zxing.client.result.GeoParsedResult((rawText.startsWith('GEO:')) ? 'geo:' + rawText.substr(4) : rawText, latitude, longitude, altitude);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ISBNParsedResult

com.google.zxing.client.result.ISBNParsedResult = function com_google_zxing_client_result_ISBNParsedResult(isbn) {
    com.google.zxing.client.result.ISBNParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.ISBN ]);
    this._isbn$1 = isbn;
}
com.google.zxing.client.result.ISBNParsedResult.prototype = {
    
    get_ISBN: function com_google_zxing_client_result_ISBNParsedResult$get_ISBN() {
        return this._isbn$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_ISBNParsedResult$get_displayResult() {
        return this._isbn$1;
    },
    
    _isbn$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ISBNResultParser

com.google.zxing.client.result.ISBNResultParser = function com_google_zxing_client_result_ISBNResultParser() {
    com.google.zxing.client.result.ISBNResultParser.initializeBase(this);
}
com.google.zxing.client.result.ISBNResultParser.parse = function com_google_zxing_client_result_ISBNResultParser$parse(result) {
    var format = result.get_barcodeFormat();
    if (!(com.google.zxing.BarcodeFormat.eaN_13 === format)) {
        return null;
    }
    var rawText = result.get_text();
    if (rawText == null) {
        return null;
    }
    var length = rawText.length;
    if (length !== 13) {
        return null;
    }
    if (!rawText.startsWith('978') && !rawText.startsWith('979')) {
        return null;
    }
    return new com.google.zxing.client.result.ISBNParsedResult(rawText);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ParsedResult

com.google.zxing.client.result.ParsedResult = function com_google_zxing_client_result_ParsedResult(type) {
    this._type = type;
}
com.google.zxing.client.result.ParsedResult.maybeAppend1 = function com_google_zxing_client_result_ParsedResult$maybeAppend1(value_Renamed, result) {
    if (value_Renamed != null && value_Renamed.length > 0) {
        if (result.toString().length > 0) {
            result.append('\n');
        }
        result.append(value_Renamed);
    }
}
com.google.zxing.client.result.ParsedResult.maybeAppend2 = function com_google_zxing_client_result_ParsedResult$maybeAppend2(value_Renamed, result) {
    if (value_Renamed != null) {
        for (var i = 0; i < value_Renamed.length; i++) {
            if (value_Renamed[i] != null && value_Renamed[i].length > 0) {
                if (result.toString().length > 0) {
                    result.append('\n');
                }
                result.append(value_Renamed[i]);
            }
        }
    }
}
com.google.zxing.client.result.ParsedResult.prototype = {
    
    get_type: function com_google_zxing_client_result_ParsedResult$get_type() {
        return this._type;
    },
    
    _type: null,
    
    toString: function com_google_zxing_client_result_ParsedResult$toString() {
        return this.get_displayResult();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ParsedResultType

com.google.zxing.client.result.ParsedResultType = function com_google_zxing_client_result_ParsedResultType(name) {
    this._name = name;
}
com.google.zxing.client.result.ParsedResultType.prototype = {
    _name: null,
    
    toString: function com_google_zxing_client_result_ParsedResultType$toString() {
        return this._name;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ProductParsedResult

com.google.zxing.client.result.ProductParsedResult = function com_google_zxing_client_result_ProductParsedResult(productID, normalizedProductID) {
    com.google.zxing.client.result.ProductParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.PRODUCT ]);
    this._productID$1 = productID;
    this._normalizedProductID$1 = normalizedProductID;
}
com.google.zxing.client.result.ProductParsedResult.prototype = {
    
    get_productID: function com_google_zxing_client_result_ProductParsedResult$get_productID() {
        return this._productID$1;
    },
    
    get_normalizedProductID: function com_google_zxing_client_result_ProductParsedResult$get_normalizedProductID() {
        return this._normalizedProductID$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_ProductParsedResult$get_displayResult() {
        return this._productID$1;
    },
    
    _productID$1: null,
    _normalizedProductID$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._productResultParser

com.google.zxing.client.result._productResultParser = function com_google_zxing_client_result__productResultParser() {
    com.google.zxing.client.result._productResultParser.initializeBase(this);
}
com.google.zxing.client.result._productResultParser.parse = function com_google_zxing_client_result__productResultParser$parse(result) {
    var format = result.get_barcodeFormat();
    if (!(com.google.zxing.BarcodeFormat.upC_A === format || com.google.zxing.BarcodeFormat.upC_E === format || com.google.zxing.BarcodeFormat.eaN_8 === format || com.google.zxing.BarcodeFormat.eaN_13 === format)) {
        return null;
    }
    var rawText = result.get_text();
    if (rawText == null) {
        return null;
    }
    var length = rawText.length;
    for (var x = 0; x < length; x++) {
        var c = rawText.charAt(x);
        if (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('0') || SystemExtend.CharExtend.toInt32('c') > SystemExtend.CharExtend.toInt32('9')) {
            return null;
        }
    }
    var normalizedProductID;
    if (com.google.zxing.BarcodeFormat.upC_E === format) {
        normalizedProductID = com.google.zxing.oned.UPCEReader.convertUPCEtoUPCA(rawText);
    }
    else {
        normalizedProductID = rawText;
    }
    return new com.google.zxing.client.result.ProductParsedResult(rawText, normalizedProductID);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.ResultParser

com.google.zxing.client.result.ResultParser = function com_google_zxing_client_result_ResultParser() {
}
com.google.zxing.client.result.ResultParser.parseResult = function com_google_zxing_client_result_ResultParser$parseResult(theResult) {
    var result;
    if ((result = com.google.zxing.client.result._bookmarkDoCoMoResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._addressBookDoCoMoResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._emailDoCoMoResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._addressBookAUResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._vCardResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._bizcardResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._vEventResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._emailAddressResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._telResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._smsmmsResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._geoResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._urltoResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._uriResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result.ISBNResultParser.parse(theResult)) != null) {
        return result;
    }
    else if ((result = com.google.zxing.client.result._productResultParser.parse(theResult)) != null) {
        return result;
    }
    return new com.google.zxing.client.result.TextParsedResult(theResult.get_text(), null);
}
com.google.zxing.client.result.ResultParser.maybeAppend1 = function com_google_zxing_client_result_ResultParser$maybeAppend1(value_Renamed, result) {
    if (value_Renamed != null) {
        result.append('\n');
        result.append(value_Renamed);
    }
}
com.google.zxing.client.result.ResultParser.maybeAppend2 = function com_google_zxing_client_result_ResultParser$maybeAppend2(value_Renamed, result) {
    if (value_Renamed != null) {
        for (var i = 0; i < value_Renamed.length; i++) {
            result.append('\n');
            result.append(value_Renamed[i]);
        }
    }
}
com.google.zxing.client.result.ResultParser.maybeWrap = function com_google_zxing_client_result_ResultParser$maybeWrap(value_Renamed) {
    return (value_Renamed == null) ? null : [ value_Renamed ];
}
com.google.zxing.client.result.ResultParser.unescapeBackslash = function com_google_zxing_client_result_ResultParser$unescapeBackslash(escaped) {
    if (escaped != null) {
        var backslash = escaped.indexOf('\\');
        if (backslash >= 0) {
            var max = escaped.length;
            var unescaped = new ss.StringBuilder();
            unescaped.append(escaped.substr(0, backslash));
            var nextIsEscaped = false;
            for (var i = backslash; i < max; i++) {
                var c = escaped.charAt(i);
                if (nextIsEscaped || c !== '\\') {
                    unescaped.append(c);
                    nextIsEscaped = false;
                }
                else {
                    nextIsEscaped = true;
                }
            }
            return unescaped.toString();
        }
    }
    return escaped;
}
com.google.zxing.client.result.ResultParser._urlDecode = function com_google_zxing_client_result_ResultParser$_urlDecode(escaped) {
    if (escaped == null) {
        return null;
    }
    var escapedArray = SystemExtend.StringExtend.toCharArray(escaped);
    var first = com.google.zxing.client.result.ResultParser._findFirstEscape(escapedArray);
    if (first < 0) {
        return escaped;
    }
    var max = escapedArray.length;
    var unescaped = new ss.StringBuilder();
    unescaped.append(escaped.substr(0, first));
    for (var i = first; i < max; i++) {
        var c = escapedArray[i];
        if (c === '+') {
            unescaped.append(' ');
        }
        else if (c === '%') {
            if (i >= max - 2) {
                unescaped.append('%');
            }
            else {
                var firstDigitValue = com.google.zxing.client.result.ResultParser._parseHexDigit(escapedArray[++i]);
                var secondDigitValue = com.google.zxing.client.result.ResultParser._parseHexDigit(escapedArray[++i]);
                if (firstDigitValue < 0 || secondDigitValue < 0) {
                    unescaped.append('%');
                    unescaped.append(escapedArray[i - 1]);
                    unescaped.append(escapedArray[i]);
                }
                unescaped.append(((firstDigitValue << 4) + secondDigitValue));
            }
        }
        else {
            unescaped.append(c);
        }
    }
    return unescaped.toString();
}
com.google.zxing.client.result.ResultParser._findFirstEscape = function com_google_zxing_client_result_ResultParser$_findFirstEscape(escapedArray) {
    var max = escapedArray.length;
    for (var i = 0; i < max; i++) {
        var c = escapedArray[i];
        if (c === '+' || c === '%') {
            return i;
        }
    }
    return -1;
}
com.google.zxing.client.result.ResultParser._parseHexDigit = function com_google_zxing_client_result_ResultParser$_parseHexDigit(c) {
    if (SystemExtend.CharExtend.toInt32(c) >= SystemExtend.CharExtend.toInt32('a')) {
        if (SystemExtend.CharExtend.toInt32(c) <= SystemExtend.CharExtend.toInt32('f')) {
            return 10 + (SystemExtend.CharExtend.toInt32(c) - SystemExtend.CharExtend.toInt32('a'));
        }
    }
    else if (SystemExtend.CharExtend.toInt32(c) >= SystemExtend.CharExtend.toInt32('A')) {
        if (SystemExtend.CharExtend.toInt32(c) <= SystemExtend.CharExtend.toInt32('A')) {
            return 10 + (SystemExtend.CharExtend.toInt32(c) - SystemExtend.CharExtend.toInt32('A'));
        }
    }
    else if (SystemExtend.CharExtend.toInt32(c) >= SystemExtend.CharExtend.toInt32('0')) {
        if (SystemExtend.CharExtend.toInt32(c) <= SystemExtend.CharExtend.toInt32('9')) {
            return SystemExtend.CharExtend.toInt32(c) - SystemExtend.CharExtend.toInt32('0');
        }
    }
    return -1;
}
com.google.zxing.client.result.ResultParser.isStringOfDigits = function com_google_zxing_client_result_ResultParser$isStringOfDigits(value_Renamed, length) {
    if (value_Renamed == null) {
        return false;
    }
    var stringLength = value_Renamed.length;
    if (length !== stringLength) {
        return false;
    }
    for (var i = 0; i < length; i++) {
        var c = value_Renamed.charAt(i);
        if (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('0') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('9')) {
            return false;
        }
    }
    return true;
}
com.google.zxing.client.result.ResultParser.isSubstringOfDigits = function com_google_zxing_client_result_ResultParser$isSubstringOfDigits(value_Renamed, offset, length) {
    if (value_Renamed == null) {
        return false;
    }
    var stringLength = value_Renamed.length;
    var max = offset + length;
    if (stringLength < max) {
        return false;
    }
    for (var i = offset; i < max; i++) {
        var c = value_Renamed.charAt(i);
        if (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('0') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('9')) {
            return false;
        }
    }
    return true;
}
com.google.zxing.client.result.ResultParser._parseNameValuePairs = function com_google_zxing_client_result_ResultParser$_parseNameValuePairs(uri) {
    var paramStart = uri.indexOf('?');
    if (paramStart < 0) {
        return null;
    }
    var result = {};
    paramStart++;
    var paramEnd;
    while ((paramEnd = uri.indexOf('&', paramStart)) >= 0) {
        com.google.zxing.client.result.ResultParser._appendKeyValue(uri, paramStart, paramEnd, result);
        paramStart = paramEnd + 1;
    }
    com.google.zxing.client.result.ResultParser._appendKeyValue(uri, paramStart, uri.length, result);
    return result;
}
com.google.zxing.client.result.ResultParser._appendKeyValue = function com_google_zxing_client_result_ResultParser$_appendKeyValue(uri, paramStart, paramEnd, result) {
    var separator = uri.indexOf('=', paramStart);
    if (separator >= 0) {
        var key = uri.substr(paramStart, separator - paramStart);
        var value_Renamed = uri.substr(separator + 1, paramEnd - (separator + 1));
        value_Renamed = com.google.zxing.client.result.ResultParser._urlDecode(value_Renamed);
        result[key] = value_Renamed;
    }
}
com.google.zxing.client.result.ResultParser._matchPrefixedField = function com_google_zxing_client_result_ResultParser$_matchPrefixedField(prefix, rawText, endChar, trim) {
    var matches = null;
    var i = 0;
    var max = rawText.length;
    while (i < max) {
        i = rawText.indexOf(prefix, i);
        if (i < 0) {
            break;
        }
        i += prefix.length;
        var start = i;
        var done = false;
        while (!done) {
            i = rawText.indexOf(endChar, i);
            if (i < 0) {
                i = rawText.length;
                done = true;
            }
            else if (rawText.charAt(i - 1) === '\\') {
                i++;
            }
            else {
                if (matches == null) {
                    matches = new Array(3);
                }
                var element = com.google.zxing.client.result.ResultParser.unescapeBackslash(rawText.substr(start, i - start));
                if (trim) {
                    element = element.trim();
                }
                matches.add(element);
                i++;
                done = true;
            }
        }
    }
    if (matches == null || (!matches.length)) {
        return null;
    }
    return com.google.zxing.client.result.ResultParser._toStringArray(matches);
}
com.google.zxing.client.result.ResultParser._matchSinglePrefixedField = function com_google_zxing_client_result_ResultParser$_matchSinglePrefixedField(prefix, rawText, endChar, trim) {
    var matches = com.google.zxing.client.result.ResultParser._matchPrefixedField(prefix, rawText, endChar, trim);
    return (matches == null) ? null : matches[0];
}
com.google.zxing.client.result.ResultParser._toStringArray = function com_google_zxing_client_result_ResultParser$_toStringArray(strings) {
    var size = strings.length;
    var result = new Array(size);
    for (var j = 0; j < size; j++) {
        result[j] = (strings[j]);
    }
    return result;
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._smsmmsResultParser

com.google.zxing.client.result._smsmmsResultParser = function com_google_zxing_client_result__smsmmsResultParser() {
    com.google.zxing.client.result._smsmmsResultParser.initializeBase(this);
}
com.google.zxing.client.result._smsmmsResultParser.parse = function com_google_zxing_client_result__smsmmsResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null) {
        return null;
    }
    var prefixLength;
    if (rawText.startsWith('sms:') || rawText.startsWith('SMS:') || rawText.startsWith('mms:') || rawText.startsWith('MMS:')) {
        prefixLength = 4;
    }
    else if (rawText.startsWith('smsto:') || rawText.startsWith('SMSTO:') || rawText.startsWith('mmsto:') || rawText.startsWith('MMSTO:')) {
        prefixLength = 6;
    }
    else {
        return null;
    }
    var nameValuePairs = com.google.zxing.client.result.ResultParser._parseNameValuePairs(rawText);
    var subject = null;
    var body = null;
    var querySyntax = false;
    if (nameValuePairs != null && !(!Object.getKeyCount(nameValuePairs))) {
        subject = (nameValuePairs['subject']);
        body = (nameValuePairs['body']);
        querySyntax = true;
    }
    var queryStart = rawText.indexOf('?', prefixLength);
    var smsURIWithoutQuery;
    if (queryStart < 0 || !querySyntax) {
        smsURIWithoutQuery = rawText.substr(prefixLength);
    }
    else {
        smsURIWithoutQuery = rawText.substr(prefixLength, queryStart - prefixLength);
    }
    var numberEnd = smsURIWithoutQuery.indexOf(';');
    var number;
    var via;
    if (numberEnd < 0) {
        number = smsURIWithoutQuery;
        via = null;
    }
    else {
        number = smsURIWithoutQuery.substr(0, numberEnd - (0));
        var maybeVia = smsURIWithoutQuery.substr(numberEnd + 1);
        if (maybeVia.startsWith('via=')) {
            via = maybeVia.substr(4);
        }
        else {
            via = null;
        }
    }
    if (body == null) {
        var bodyStart = number.indexOf(':');
        if (bodyStart >= 0) {
            body = number.substr(bodyStart + 1);
            number = number.substr(0, bodyStart - (0));
        }
    }
    return new com.google.zxing.client.result.SMSParsedResult('sms:' + number, number, via, subject, body, null);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.SMSParsedResult

com.google.zxing.client.result.SMSParsedResult = function com_google_zxing_client_result_SMSParsedResult(smsURI, number, via, subject, body, title) {
    com.google.zxing.client.result.SMSParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.SMS ]);
    this._smsURI$1 = smsURI;
    this._number$1 = number;
    this._via$1 = via;
    this._subject$1 = subject;
    this._body$1 = body;
    this._title$1 = title;
}
com.google.zxing.client.result.SMSParsedResult.prototype = {
    
    get_SMSURI: function com_google_zxing_client_result_SMSParsedResult$get_SMSURI() {
        return this._smsURI$1;
    },
    
    get_number: function com_google_zxing_client_result_SMSParsedResult$get_number() {
        return this._number$1;
    },
    
    get_via: function com_google_zxing_client_result_SMSParsedResult$get_via() {
        return this._via$1;
    },
    
    get_subject: function com_google_zxing_client_result_SMSParsedResult$get_subject() {
        return this._subject$1;
    },
    
    get_body: function com_google_zxing_client_result_SMSParsedResult$get_body() {
        return this._body$1;
    },
    
    get_title: function com_google_zxing_client_result_SMSParsedResult$get_title() {
        return this._title$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_SMSParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._number$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._via$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._subject$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._body$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._title$1, result);
        return result.toString();
    },
    
    _smsURI$1: null,
    _number$1: null,
    _via$1: null,
    _subject$1: null,
    _body$1: null,
    _title$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.TelParsedResult

com.google.zxing.client.result.TelParsedResult = function com_google_zxing_client_result_TelParsedResult(number, telURI, title) {
    com.google.zxing.client.result.TelParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.TEL ]);
    this._number$1 = number;
    this._telURI$1 = telURI;
    this._title$1 = title;
}
com.google.zxing.client.result.TelParsedResult.prototype = {
    
    get_number: function com_google_zxing_client_result_TelParsedResult$get_number() {
        return this._number$1;
    },
    
    get_telURI: function com_google_zxing_client_result_TelParsedResult$get_telURI() {
        return this._telURI$1;
    },
    
    get_title: function com_google_zxing_client_result_TelParsedResult$get_title() {
        return this._title$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_TelParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._number$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._title$1, result);
        return result.toString();
    },
    
    _number$1: null,
    _telURI$1: null,
    _title$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._telResultParser

com.google.zxing.client.result._telResultParser = function com_google_zxing_client_result__telResultParser() {
    com.google.zxing.client.result._telResultParser.initializeBase(this);
}
com.google.zxing.client.result._telResultParser.parse = function com_google_zxing_client_result__telResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || (!rawText.startsWith('tel:') && !rawText.startsWith('TEL:'))) {
        return null;
    }
    var telURI = (rawText.startsWith('TEL:')) ? 'tel:' + rawText.substr(4) : rawText;
    var queryStart = rawText.indexOf('?', 4);
    var number = (queryStart < 0) ? rawText.substr(4) : rawText.substr(4, queryStart - (4));
    return new com.google.zxing.client.result.TelParsedResult(number, telURI, null);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.TextParsedResult

com.google.zxing.client.result.TextParsedResult = function com_google_zxing_client_result_TextParsedResult(text, language) {
    com.google.zxing.client.result.TextParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.TEXT ]);
    this._text$1 = text;
    this._language$1 = language;
}
com.google.zxing.client.result.TextParsedResult.prototype = {
    
    get_text: function com_google_zxing_client_result_TextParsedResult$get_text() {
        return this._text$1;
    },
    
    get_language: function com_google_zxing_client_result_TextParsedResult$get_language() {
        return this._language$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_TextParsedResult$get_displayResult() {
        return this._text$1;
    },
    
    _text$1: null,
    _language$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.URIParsedResult

com.google.zxing.client.result.URIParsedResult = function com_google_zxing_client_result_URIParsedResult(uri, title) {
    com.google.zxing.client.result.URIParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.URI ]);
    this._uri$1 = com.google.zxing.client.result.URIParsedResult._massageURI$1(uri);
    this._title$1 = title;
}
com.google.zxing.client.result.URIParsedResult._massageURI$1 = function com_google_zxing_client_result_URIParsedResult$_massageURI$1(uri) {
    var protocolEnd = uri.indexOf(':');
    if (protocolEnd < 0) {
        uri = 'http://' + uri;
    }
    else if (com.google.zxing.client.result.URIParsedResult._isColonFollowedByPortNumber$1(uri, protocolEnd)) {
        uri = 'http://' + uri;
    }
    else {
        uri = uri.substr(0, protocolEnd - (0)).toLowerCase() + uri.substr(protocolEnd);
    }
    return uri;
}
com.google.zxing.client.result.URIParsedResult._isColonFollowedByPortNumber$1 = function com_google_zxing_client_result_URIParsedResult$_isColonFollowedByPortNumber$1(uri, protocolEnd) {
    var nextSlash = uri.indexOf('/', protocolEnd + 1);
    if (nextSlash < 0) {
        nextSlash = uri.length;
    }
    if (nextSlash <= protocolEnd + 1) {
        return false;
    }
    for (var x = protocolEnd + 1; x < nextSlash; x++) {
        if (uri.charAt(x) < '0' || uri.charAt(x) > '9') {
            return false;
        }
    }
    return true;
}
com.google.zxing.client.result.URIParsedResult.prototype = {
    
    get_URI: function com_google_zxing_client_result_URIParsedResult$get_URI() {
        return this._uri$1;
    },
    
    get_title: function com_google_zxing_client_result_URIParsedResult$get_title() {
        return this._title$1;
    },
    
    get_possiblyMaliciousURI: function com_google_zxing_client_result_URIParsedResult$get_possiblyMaliciousURI() {
        return this._containsUser$1();
    },
    
    get_displayResult: function com_google_zxing_client_result_URIParsedResult$get_displayResult() {
        var result = new ss.StringBuilder();
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._title$1, result);
        com.google.zxing.client.result.ParsedResult.maybeAppend1(this._uri$1, result);
        return result.toString();
    },
    
    _uri$1: null,
    _title$1: null,
    
    _containsUser$1: function com_google_zxing_client_result_URIParsedResult$_containsUser$1() {
        var hostStart = this._uri$1.indexOf(':');
        hostStart++;
        var uriLength = this._uri$1.length;
        while (hostStart < uriLength && this._uri$1.charAt(hostStart) === '/') {
            hostStart++;
        }
        var hostEnd = this._uri$1.indexOf('/', hostStart);
        if (hostEnd < 0) {
            hostEnd = uriLength;
        }
        var at = this._uri$1.indexOf('@', hostStart);
        return at >= hostStart && at < hostEnd;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._uriResultParser

com.google.zxing.client.result._uriResultParser = function com_google_zxing_client_result__uriResultParser() {
    com.google.zxing.client.result._uriResultParser.initializeBase(this);
}
com.google.zxing.client.result._uriResultParser.parse = function com_google_zxing_client_result__uriResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText != null && rawText.startsWith('URL:')) {
        rawText = rawText.substr(4);
    }
    if (!com.google.zxing.client.result._uriResultParser._isBasicallyValidURI(rawText)) {
        return null;
    }
    return new com.google.zxing.client.result.URIParsedResult(rawText, null);
}
com.google.zxing.client.result._uriResultParser._isBasicallyValidURI = function com_google_zxing_client_result__uriResultParser$_isBasicallyValidURI(uri) {
    if (uri == null || uri.indexOf(' ') >= 0 || uri.indexOf('\n') >= 0) {
        return false;
    }
    var period = uri.indexOf('.');
    if (period >= uri.length - 2) {
        return false;
    }
    var colon = uri.indexOf(':');
    if (period < 0 && colon < 0) {
        return false;
    }
    if (colon >= 0) {
        if (period < 0 || period > colon) {
            for (var i = 0; i < colon; i++) {
                var c = uri.charAt(i);
                if ((SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('a') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('z')) && (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('A') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('Z'))) {
                    return false;
                }
            }
        }
        else {
            if (colon >= uri.length - 2) {
                return false;
            }
            for (var i = colon + 1; i < colon + 3; i++) {
                var c = uri.charAt(i);
                if (SystemExtend.CharExtend.toInt32(c) < SystemExtend.CharExtend.toInt32('0') || SystemExtend.CharExtend.toInt32(c) > SystemExtend.CharExtend.toInt32('9')) {
                    return false;
                }
            }
        }
    }
    return true;
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._urltoResultParser

com.google.zxing.client.result._urltoResultParser = function com_google_zxing_client_result__urltoResultParser() {
}
com.google.zxing.client.result._urltoResultParser.parse = function com_google_zxing_client_result__urltoResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || (!rawText.startsWith('urlto:') && !rawText.startsWith('URLTO:'))) {
        return null;
    }
    var titleEnd = rawText.indexOf(':', 6);
    if (titleEnd < 0) {
        return null;
    }
    var title = (titleEnd <= 6) ? null : rawText.substr(6, titleEnd - (6));
    var uri = rawText.substr(titleEnd + 1);
    return new com.google.zxing.client.result.URIParsedResult(uri, title);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._vCardResultParser

com.google.zxing.client.result._vCardResultParser = function com_google_zxing_client_result__vCardResultParser() {
    com.google.zxing.client.result._vCardResultParser.initializeBase(this);
}
com.google.zxing.client.result._vCardResultParser.parse = function com_google_zxing_client_result__vCardResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null || !rawText.startsWith('BEGIN:VCARD')) {
        return null;
    }
    var names = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1('FN', rawText, true);
    if (names == null) {
        names = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1('N', rawText, true);
        com.google.zxing.client.result._vCardResultParser._formatNames$1(names);
    }
    var phoneNumbers = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1('TEL', rawText, true);
    var emails = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1('EMAIL', rawText, true);
    var note = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('NOTE', rawText, false);
    var addresses = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1('ADR', rawText, true);
    if (addresses != null) {
        for (var i = 0; i < addresses.length; i++) {
            addresses[i] = com.google.zxing.client.result._vCardResultParser._formatAddress$1(addresses[i]);
        }
    }
    var org = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('ORG', rawText, true);
    var birthday = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('BDAY', rawText, true);
    if (!com.google.zxing.client.result._vCardResultParser._isLikeVCardDate$1(birthday)) {
        birthday = null;
    }
    var title = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('TITLE', rawText, true);
    var url = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('URL', rawText, true);
    return new com.google.zxing.client.result.AddressBookParsedResult(names, null, phoneNumbers, emails, note, addresses, org, birthday, title, url);
}
com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1 = function com_google_zxing_client_result__vCardResultParser$_matchVCardPrefixedField$1(prefix, rawText, trim) {
    var matches = null;
    var i = 0;
    var max = rawText.length;
    while (i < max) {
        i = rawText.indexOf(prefix, i);
        if (i < 0) {
            break;
        }
        if (i > 0 && rawText.charAt(i - 1) !== '\n') {
            i++;
            continue;
        }
        i += prefix.length;
        if (rawText.charAt(i) !== ':' && rawText.charAt(i) !== ';') {
            continue;
        }
        while (rawText.charAt(i) !== ':') {
            i++;
        }
        i++;
        var start = i;
        i = rawText.indexOf('\n', i);
        if (i < 0) {
            i = max;
        }
        else if (i > start) {
            if (matches == null) {
                matches = new Array(3);
            }
            var element = rawText.substr(start, i - start);
            if (trim) {
                element = element.trim();
            }
            matches.add(element);
            i++;
        }
        else {
            i++;
        }
    }
    if (matches == null || (!matches.length)) {
        return null;
    }
    return com.google.zxing.client.result.ResultParser._toStringArray(matches);
}
com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField = function com_google_zxing_client_result__vCardResultParser$_matchSingleVCardPrefixedField(prefix, rawText, trim) {
    var values = com.google.zxing.client.result._vCardResultParser._matchVCardPrefixedField$1(prefix, rawText, trim);
    return (values == null) ? null : values[0];
}
com.google.zxing.client.result._vCardResultParser._isLikeVCardDate$1 = function com_google_zxing_client_result__vCardResultParser$_isLikeVCardDate$1(value_Renamed) {
    if (value_Renamed == null) {
        return true;
    }
    if (com.google.zxing.client.result.ResultParser.isStringOfDigits(value_Renamed, 8)) {
        return true;
    }
    return value_Renamed.length === 10 && value_Renamed.charAt(4) === '-' && value_Renamed.charAt(7) === '-' && com.google.zxing.client.result.ResultParser.isSubstringOfDigits(value_Renamed, 0, 4) && com.google.zxing.client.result.ResultParser.isSubstringOfDigits(value_Renamed, 5, 2) && com.google.zxing.client.result.ResultParser.isSubstringOfDigits(value_Renamed, 8, 2);
}
com.google.zxing.client.result._vCardResultParser._formatAddress$1 = function com_google_zxing_client_result__vCardResultParser$_formatAddress$1(address) {
    if (address == null) {
        return null;
    }
    var length = address.length;
    var newAddress = new ss.StringBuilder();
    for (var j = 0; j < length; j++) {
        var c = address.charAt(j);
        if (c === ';') {
            newAddress.append(' ');
        }
        else {
            newAddress.append(c);
        }
    }
    return newAddress.toString().trim();
}
com.google.zxing.client.result._vCardResultParser._formatNames$1 = function com_google_zxing_client_result__vCardResultParser$_formatNames$1(names) {
    if (names != null) {
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            var components = new Array(5);
            var start = 0;
            var end;
            var componentIndex = 0;
            while ((end = name.indexOf(';', start)) > 0) {
                components[componentIndex] = name.substr(start, end - start);
                componentIndex++;
                start = end + 1;
            }
            components[componentIndex] = name.substr(start);
            var newName = new ss.StringBuilder();
            com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1(components, 3, newName);
            com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1(components, 1, newName);
            com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1(components, 2, newName);
            com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1(components, 0, newName);
            com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1(components, 4, newName);
            names[i] = newName.toString().trim();
        }
    }
}
com.google.zxing.client.result._vCardResultParser._maybeAppendComponent$1 = function com_google_zxing_client_result__vCardResultParser$_maybeAppendComponent$1(components, i, newName) {
    if (components[i] != null) {
        newName.append(' ');
        newName.append(components[i]);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result._vEventResultParser

com.google.zxing.client.result._vEventResultParser = function com_google_zxing_client_result__vEventResultParser() {
    com.google.zxing.client.result._vEventResultParser.initializeBase(this);
}
com.google.zxing.client.result._vEventResultParser.parse = function com_google_zxing_client_result__vEventResultParser$parse(result) {
    var rawText = result.get_text();
    if (rawText == null) {
        return null;
    }
    var vEventStart = rawText.indexOf('BEGIN:VEVENT');
    if (vEventStart < 0) {
        return null;
    }
    var vEventEnd = rawText.indexOf('END:VEVENT');
    if (vEventEnd < 0) {
        return null;
    }
    var summary = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('SUMMARY', rawText, true);
    var start = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('DTSTART', rawText, true);
    var end = com.google.zxing.client.result._vCardResultParser._matchSingleVCardPrefixedField('DTEND', rawText, true);
    try {
        return new com.google.zxing.client.result.CalendarParsedResult(summary, start, end, null, null, null);
    }
    catch ($e1) {
        return null;
    }
}


Type.registerNamespace('com.google.zxing.client.result.optional');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional._abstractNDEFResultParser

com.google.zxing.client.result.optional._abstractNDEFResultParser = function com_google_zxing_client_result_optional__abstractNDEFResultParser() {
    com.google.zxing.client.result.optional._abstractNDEFResultParser.initializeBase(this);
}
com.google.zxing.client.result.optional._abstractNDEFResultParser._bytesToString = function com_google_zxing_client_result_optional__abstractNDEFResultParser$_bytesToString(bytes, offset, length, encoding) {
    try {
        var tempStr;
        tempStr = SystemExtend.Text.Encoding.getEncoding(encoding).getString(SupportClass.toByteArray1(bytes));
        return tempStr.substr(offset, length);
    }
    catch (uee) {
        throw new Error('SystemExpection: Platform does not support required encoding: ' + uee);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional._ndefRecord

com.google.zxing.client.result.optional._ndefRecord = function com_google_zxing_client_result_optional__ndefRecord(header, type, payload, totalRecordLength) {
    this._header = header;
    this._type = type;
    this._payload = payload;
    this._totalRecordLength = totalRecordLength;
}
com.google.zxing.client.result.optional._ndefRecord._readRecord = function com_google_zxing_client_result_optional__ndefRecord$_readRecord(bytes, offset) {
    var header = bytes[offset] & 255;
    if (!!((header ^ 17) & 63)) {
        return null;
    }
    var typeLength = bytes[offset + 1] & 255;
    var payloadLength = bytes[offset + 2] & 255;
    var type = com.google.zxing.client.result.optional._abstractNDEFResultParser._bytesToString(bytes, offset + 3, typeLength, 'US-ASCII');
    var payload = new Array(payloadLength);
    SystemExtend.ArrayExtend.copy(bytes, offset + 3 + typeLength, payload, 0, payloadLength);
    return new com.google.zxing.client.result.optional._ndefRecord(header, type, payload, 3 + typeLength + payloadLength);
}
com.google.zxing.client.result.optional._ndefRecord.prototype = {
    
    get__messageBegin: function com_google_zxing_client_result_optional__ndefRecord$get__messageBegin() {
        return !!(this._header & 128);
    },
    
    get__messageEnd: function com_google_zxing_client_result_optional__ndefRecord$get__messageEnd() {
        return !!(this._header & 64);
    },
    
    get__type: function com_google_zxing_client_result_optional__ndefRecord$get__type() {
        return this._type;
    },
    
    get__payload: function com_google_zxing_client_result_optional__ndefRecord$get__payload() {
        return this._payload;
    },
    
    get__totalRecordLength: function com_google_zxing_client_result_optional__ndefRecord$get__totalRecordLength() {
        return this._totalRecordLength;
    },
    
    _header: 0,
    _type: null,
    _payload: null,
    _totalRecordLength: 0
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult

com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult = function com_google_zxing_client_result_optional_NDEFSmartPosterParsedResult(action, uri, title) {
    com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.initializeBase(this, [ com.google.zxing.client.result.ParsedResultType.ndeF_SMART_POSTER ]);
    this._action$1 = action;
    this._uri$1 = uri;
    this._title$1 = title;
}
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.prototype = {
    
    get_title: function com_google_zxing_client_result_optional_NDEFSmartPosterParsedResult$get_title() {
        return this._title$1;
    },
    
    get_URI: function com_google_zxing_client_result_optional_NDEFSmartPosterParsedResult$get_URI() {
        return this._uri$1;
    },
    
    get_action: function com_google_zxing_client_result_optional_NDEFSmartPosterParsedResult$get_action() {
        return this._action$1;
    },
    
    get_displayResult: function com_google_zxing_client_result_optional_NDEFSmartPosterParsedResult$get_displayResult() {
        if (this._title$1 == null) {
            return this._uri$1;
        }
        else {
            return this._title$1 + '\n' + this._uri$1;
        }
    },
    
    _title$1: null,
    _uri$1: null,
    _action$1: 0
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional._ndefSmartPosterResultParser

com.google.zxing.client.result.optional._ndefSmartPosterResultParser = function com_google_zxing_client_result_optional__ndefSmartPosterResultParser() {
    com.google.zxing.client.result.optional._ndefSmartPosterResultParser.initializeBase(this);
}
com.google.zxing.client.result.optional._ndefSmartPosterResultParser.parse = function com_google_zxing_client_result_optional__ndefSmartPosterResultParser$parse(result) {
    var bytes = result.get_rawBytes();
    if (bytes == null) {
        return null;
    }
    var headerRecord = com.google.zxing.client.result.optional._ndefRecord._readRecord(bytes, 0);
    if (headerRecord == null || !headerRecord.get__messageBegin() || !headerRecord.get__messageEnd()) {
        return null;
    }
    if (!(headerRecord.get__type() === 'Sp')) {
        return null;
    }
    var offset = 0;
    var recordNumber = 0;
    var ndefRecord = null;
    var payload = headerRecord.get__payload();
    var action = com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.actioN_UNSPECIFIED;
    var title = null;
    var uri = null;
    while (offset < payload.length && (ndefRecord = com.google.zxing.client.result.optional._ndefRecord._readRecord(payload, offset)) != null) {
        if (!recordNumber && !ndefRecord.get__messageBegin()) {
            return null;
        }
        var type = ndefRecord.get__type();
        if ('T' === type) {
            var languageText = com.google.zxing.client.result.optional._ndefTextResultParser._decodeTextPayload(ndefRecord.get__payload());
            title = languageText[1];
        }
        else if ('U' === type) {
            uri = com.google.zxing.client.result.optional._ndefuriResultParser._decodeURIPayload(ndefRecord.get__payload());
        }
        else if ('act' === type) {
            action = ndefRecord.get__payload()[0];
        }
        recordNumber++;
        offset += ndefRecord.get__totalRecordLength();
    }
    if (!recordNumber || (ndefRecord != null && !ndefRecord.get__messageEnd())) {
        return null;
    }
    return new com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult(action, uri, title);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional._ndefTextResultParser

com.google.zxing.client.result.optional._ndefTextResultParser = function com_google_zxing_client_result_optional__ndefTextResultParser() {
    com.google.zxing.client.result.optional._ndefTextResultParser.initializeBase(this);
}
com.google.zxing.client.result.optional._ndefTextResultParser.parse = function com_google_zxing_client_result_optional__ndefTextResultParser$parse(result) {
    var bytes = result.get_rawBytes();
    if (bytes == null) {
        return null;
    }
    var ndefRecord = com.google.zxing.client.result.optional._ndefRecord._readRecord(bytes, 0);
    if (ndefRecord == null || !ndefRecord.get__messageBegin() || !ndefRecord.get__messageEnd()) {
        return null;
    }
    if (!(ndefRecord.get__type() === 'T')) {
        return null;
    }
    var languageText = com.google.zxing.client.result.optional._ndefTextResultParser._decodeTextPayload(ndefRecord.get__payload());
    return new com.google.zxing.client.result.TextParsedResult(languageText[0], languageText[1]);
}
com.google.zxing.client.result.optional._ndefTextResultParser._decodeTextPayload = function com_google_zxing_client_result_optional__ndefTextResultParser$_decodeTextPayload(payload) {
    var statusByte = payload[0];
    var isUTF16 = !!(statusByte & 128);
    var languageLength = statusByte & 31;
    var language = com.google.zxing.client.result.optional._abstractNDEFResultParser._bytesToString(payload, 1, languageLength, 'US-ASCII');
    var encoding = (isUTF16) ? 'UTF-16' : 'UTF-8';
    var text = com.google.zxing.client.result.optional._abstractNDEFResultParser._bytesToString(payload, 1 + languageLength, payload.length - languageLength - 1, encoding);
    return [ language, text ];
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.client.result.optional._ndefuriResultParser

com.google.zxing.client.result.optional._ndefuriResultParser = function com_google_zxing_client_result_optional__ndefuriResultParser() {
    com.google.zxing.client.result.optional._ndefuriResultParser.initializeBase(this);
}
com.google.zxing.client.result.optional._ndefuriResultParser.parse = function com_google_zxing_client_result_optional__ndefuriResultParser$parse(result) {
    var bytes = result.get_rawBytes();
    if (bytes == null) {
        return null;
    }
    var ndefRecord = com.google.zxing.client.result.optional._ndefRecord._readRecord(bytes, 0);
    if (ndefRecord == null || !ndefRecord.get__messageBegin() || !ndefRecord.get__messageEnd()) {
        return null;
    }
    if (!(ndefRecord.get__type() === 'U')) {
        return null;
    }
    var fullURI = com.google.zxing.client.result.optional._ndefuriResultParser._decodeURIPayload(ndefRecord.get__payload());
    return new com.google.zxing.client.result.URIParsedResult(fullURI, null);
}
com.google.zxing.client.result.optional._ndefuriResultParser._decodeURIPayload = function com_google_zxing_client_result_optional__ndefuriResultParser$_decodeURIPayload(payload) {
    var identifierCode = payload[0] & 255;
    var prefix = null;
    if (identifierCode < com.google.zxing.client.result.optional._ndefuriResultParser._urI_PREFIXES$2.length) {
        prefix = com.google.zxing.client.result.optional._ndefuriResultParser._urI_PREFIXES$2[identifierCode];
    }
    var restOfURI = com.google.zxing.client.result.optional._abstractNDEFResultParser._bytesToString(payload, 1, payload.length - 1, 'UTF-8');
    return (prefix == null) ? restOfURI : prefix + restOfURI;
}


Type.registerNamespace('com.google.zxing.common');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.Comparator

com.google.zxing.common.Comparator = function() { };
com.google.zxing.common.Comparator.prototype = {
    compare : null
}
com.google.zxing.common.Comparator.registerInterface('com.google.zxing.common.Comparator');


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.BitArray

com.google.zxing.common.BitArray = function com_google_zxing_common_BitArray(size) {
    if (size < 1) {
        throw new Error('size must be at least 1');
    }
    this.size = size;
    this.bits = com.google.zxing.common.BitArray._makeArray(size);
}
com.google.zxing.common.BitArray._makeArray = function com_google_zxing_common_BitArray$_makeArray(size) {
    var arraySize = size >> 5;
    if (!!(size & 31)) {
        arraySize++;
    }
    return new Array(arraySize);
}
com.google.zxing.common.BitArray.prototype = {
    
    get_size: function com_google_zxing_common_BitArray$get_size() {
        return this.size;
    },
    
    bits: null,
    size: 0,
    
    get_Renamed: function com_google_zxing_common_BitArray$get_Renamed(i) {
        return !!(this.bits[i >> 5] & (1 << (i & 31)));
    },
    
    set_Renamed: function com_google_zxing_common_BitArray$set_Renamed(i) {
        this.bits[i >> 5] |= 1 << (i & 31);
    },
    
    flip: function com_google_zxing_common_BitArray$flip(i) {
        this.bits[i >> 5] ^= 1 << (i & 31);
    },
    
    setBulk: function com_google_zxing_common_BitArray$setBulk(i, newBits) {
        this.bits[i >> 5] = newBits;
    },
    
    clear: function com_google_zxing_common_BitArray$clear() {
        var max = this.bits.length;
        for (var i = 0; i < max; i++) {
            this.bits[i] = 0;
        }
    },
    
    isRange: function com_google_zxing_common_BitArray$isRange(start, end, value_Renamed) {
        if (end < start) {
            throw new Error('ArgumentException');
        }
        if (end === start) {
            return true;
        }
        end--;
        var firstInt = start >> 5;
        var lastInt = end >> 5;
        for (var i = firstInt; i <= lastInt; i++) {
            var firstBit = (i > firstInt) ? 0 : start & 31;
            var lastBit = (i < lastInt) ? 31 : end & 31;
            var mask;
            if (!firstBit && lastBit === 31) {
                mask = -1;
            }
            else {
                mask = 0;
                for (var j = firstBit; j <= lastBit; j++) {
                    mask |= 1 << j;
                }
            }
            if ((this.bits[i] & mask) !== ((value_Renamed) ? mask : 0)) {
                return false;
            }
        }
        return true;
    },
    
    getBitArray: function com_google_zxing_common_BitArray$getBitArray() {
        return this.bits;
    },
    
    reverse: function com_google_zxing_common_BitArray$reverse() {
        var newBits = new Array(this.bits.length);
        var size = this.size;
        for (var i = 0; i < size; i++) {
            if (this.get_Renamed(size - i - 1)) {
                newBits[i >> 5] |= 1 << (i & 31);
            }
        }
        this.bits = newBits;
    },
    
    toString: function com_google_zxing_common_BitArray$toString() {
        var result = new ss.StringBuilder();
        for (var i = 0; i < this.size; i++) {
            if (!(i & 7)) {
                result.append(' ');
            }
            result.append((this.get_Renamed(i)) ? 'X' : '.');
        }
        return result.toString();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.BitMatrix

com.google.zxing.common.BitMatrix = function com_google_zxing_common_BitMatrix(width, height) {
    if (width < 1 || height < 1) {
        throw new Error('Both dimensions must be greater than 0');
    }
    this.width = width;
    this.height = height;
    var rowSize = width >> 5;
    if (!!(width & 31)) {
        rowSize++;
    }
    this.rowSize = rowSize;
    this.bits = new Array(rowSize * height);
    for (var i = 0; i < this.bits.length; i++) {
        this.bits[i] = 0;
    }
}
com.google.zxing.common.BitMatrix.createSquareInstance = function com_google_zxing_common_BitMatrix$createSquareInstance(dimension) {
    return new com.google.zxing.common.BitMatrix(dimension, dimension);
}
com.google.zxing.common.BitMatrix.prototype = {
    
    get_width: function com_google_zxing_common_BitMatrix$get_width() {
        return this.width;
    },
    
    get_height: function com_google_zxing_common_BitMatrix$get_height() {
        return this.height;
    },
    
    get_dimension: function com_google_zxing_common_BitMatrix$get_dimension() {
        if (this.width !== this.height) {
            throw new Error("SystemExpection: Can't call getDimension() on a non-square matrix");
        }
        return this.width;
    },
    
    width: 0,
    height: 0,
    rowSize: 0,
    bits: null,
    
    get_Renamed: function com_google_zxing_common_BitMatrix$get_Renamed(x, y) {
        var offset = y * this.rowSize + (x >> 5);
        return !!(SupportClass.urShift1(this.bits[offset], (x & 31)) & 1);
    },
    
    set_Renamed: function com_google_zxing_common_BitMatrix$set_Renamed(x, y) {
        var offset = y * this.rowSize + (x >> 5);
        this.bits[offset] |= 1 << (x & 31);
    },
    
    flip: function com_google_zxing_common_BitMatrix$flip(x, y) {
        var offset = y * this.rowSize + (x >> 5);
        this.bits[offset] ^= 1 << (x & 31);
    },
    
    clear: function com_google_zxing_common_BitMatrix$clear() {
        var max = this.bits.length;
        for (var i = 0; i < max; i++) {
            this.bits[i] = 0;
        }
    },
    
    setRegion: function com_google_zxing_common_BitMatrix$setRegion(left, top, width, height) {
        if (top < 0 || left < 0) {
            throw new Error('Left and top must be nonnegative');
        }
        if (height < 1 || width < 1) {
            throw new Error('Height and width must be at least 1');
        }
        var right = left + width;
        var bottom = top + height;
        if (bottom > this.height || right > this.width) {
            throw new Error('The region must fit inside the matrix');
        }
        for (var y = top; y < bottom; y++) {
            var offset = y * this.rowSize;
            for (var x = left; x < right; x++) {
                this.bits[offset + (x >> 5)] |= 1 << (x & 31);
            }
        }
    },
    
    getRow: function com_google_zxing_common_BitMatrix$getRow(y, row) {
        if (row == null || row.get_size() < this.width) {
            row = new com.google.zxing.common.BitArray(this.width);
        }
        var offset = y * this.rowSize;
        for (var x = 0; x < this.rowSize; x++) {
            row.setBulk(x << 5, this.bits[offset + x]);
        }
        return row;
    },
    
    toString: function com_google_zxing_common_BitMatrix$toString() {
        var result = new ss.StringBuilder();
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                result.append((this.get_Renamed(x, y)) ? 'X ' : '  ');
            }
            result.append('\n');
        }
        return result.toString();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.BitSource

com.google.zxing.common.BitSource = function com_google_zxing_common_BitSource(bytes) {
    this._bytes = bytes;
}
com.google.zxing.common.BitSource.prototype = {
    _bytes: null,
    _byteOffset: 0,
    _bitOffset: 0,
    
    readBits: function com_google_zxing_common_BitSource$readBits(numBits) {
        if (numBits < 1 || numBits > 32) {
            throw new Error('ArgumentException');
        }
        var result = 0;
        if (this._bitOffset > 0) {
            var bitsLeft = 8 - this._bitOffset;
            var toRead = (numBits < bitsLeft) ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (255 >> (8 - toRead)) << bitsToNotRead;
            result = (this._bytes[this._byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            this._bitOffset += toRead;
            if (this._bitOffset === 8) {
                this._bitOffset = 0;
                this._byteOffset++;
            }
        }
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (this._bytes[this._byteOffset] & 255);
                this._byteOffset++;
                numBits -= 8;
            }
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (255 >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((this._bytes[this._byteOffset] & mask) >> bitsToNotRead);
                this._bitOffset += numBits;
            }
        }
        return result;
    },
    
    available: function com_google_zxing_common_BitSource$available() {
        return 8 * (this._bytes.length - this._byteOffset) - this._bitOffset;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.ByteArray

com.google.zxing.common.ByteArray = function com_google_zxing_common_ByteArray(size) {
    this._bytes = new Array(size);
    this._size_Renamed_Field = size;
}
com.google.zxing.common.ByteArray.prototype = {
    
    get_empty: function com_google_zxing_common_ByteArray$get_empty() {
        return !this._size_Renamed_Field;
    },
    
    _bytes: null,
    _size_Renamed_Field: 0,
    
    at: function com_google_zxing_common_ByteArray$at(index) {
        return this._bytes[index] & 255;
    },
    
    set_Renamed1: function com_google_zxing_common_ByteArray$set_Renamed1(index, value_Renamed) {
        this._bytes[index] = value_Renamed;
    },
    
    size: function com_google_zxing_common_ByteArray$size() {
        return this._size_Renamed_Field;
    },
    
    appendByte: function com_google_zxing_common_ByteArray$appendByte(value_Renamed) {
        if (!this._size_Renamed_Field || this._size_Renamed_Field >= this._bytes.length) {
            var newSize = Math.max(32, this._size_Renamed_Field << 1);
            this.reserve(newSize);
        }
        this._bytes[this._size_Renamed_Field] = value_Renamed;
        this._size_Renamed_Field++;
    },
    
    reserve: function com_google_zxing_common_ByteArray$reserve(capacity) {
        if (this._bytes == null || this._bytes.length < capacity) {
            var newArray = new Array(capacity);
            if (this._bytes != null) {
                SystemExtend.ArrayExtend.copy(this._bytes, 0, newArray, 0, this._bytes.length);
            }
            this._bytes = newArray;
        }
    },
    
    set_Renamed2: function com_google_zxing_common_ByteArray$set_Renamed2(source, offset, count) {
        this._bytes = new Array(count);
        this._size_Renamed_Field = count;
        for (var x = 0; x < count; x++) {
            this._bytes[x] = source[offset + x];
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.ByteMatrix

com.google.zxing.common.ByteMatrix = function com_google_zxing_common_ByteMatrix(width, height) {
    this._bytes = new Array(height);
    for (var i = 0; i < height; i++) {
        this._bytes[i] = new Array(width);
    }
    this._width = width;
    this._height = height;
}
com.google.zxing.common.ByteMatrix.prototype = {
    
    get_height: function com_google_zxing_common_ByteMatrix$get_height() {
        return this._height;
    },
    
    get_width: function com_google_zxing_common_ByteMatrix$get_width() {
        return this._width;
    },
    
    get_array: function com_google_zxing_common_ByteMatrix$get_array() {
        return this._bytes;
    },
    
    _bytes: null,
    _width: 0,
    _height: 0,
    
    get_Renamed: function com_google_zxing_common_ByteMatrix$get_Renamed(x, y) {
        return this._bytes[y][x];
    },
    
    set_Renamed: function com_google_zxing_common_ByteMatrix$set_Renamed(x, y, value_Renamed) {
        this._bytes[y][x] = value_Renamed;
    },
    
    clear: function com_google_zxing_common_ByteMatrix$clear(value_Renamed) {
        for (var y = 0; y < this._height; ++y) {
            for (var x = 0; x < this._width; ++x) {
                this._bytes[y][x] = value_Renamed;
            }
        }
    },
    
    toString: function com_google_zxing_common_ByteMatrix$toString() {
        var result = new ss.StringBuilder();
        for (var y = 0; y < this._height; ++y) {
            for (var x = 0; x < this._width; ++x) {
                switch (this._bytes[y][x]) {
                    case 0:
                        result.append(' 0');
                        break;
                    case 1:
                        result.append(' 1');
                        break;
                    default:
                        result.append('  ');
                        break;
                }
            }
            result.append('\n');
        }
        return result.toString();
    },
    
    toBitmap: function com_google_zxing_common_ByteMatrix$toBitmap() {
        var BLACK = 0;
        var WHITE = 255;
        var array = this.get_array();
        var width = this.get_width();
        var height = this.get_height();
        var pixels = new Array(width * height);
        for (var y = 0; y < height; y++) {
            var offset = y * width;
            for (var x = 0; x < width; x++) {
                pixels[offset + x] = (!array[y][x]) ? BLACK : WHITE;
            }
        }
        var bmp = new SystemExtend.Drawing.Bitmap(width, height, 1);
        var bmpData = bmp.lockBits(new SystemExtend.Drawing.Rectangle(0, 0, bmp.get_width(), bmp.get_height()), 4, bmp.get_pixelFormat());
        SystemExtend.ArrayExtend.copy(pixels, 0, bmpData.get_scan0(), 0, pixels.length);
        bmp.unlockBits(bmpData);
        return bmp;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.CharacterSetECI

com.google.zxing.common.CharacterSetECI = function com_google_zxing_common_CharacterSetECI(value_Renamed, encodingName) {
    com.google.zxing.common.CharacterSetECI.initializeBase(this, [ value_Renamed ]);
    this._encodingName$1 = encodingName;
}
com.google.zxing.common.CharacterSetECI._initialize$1 = function com_google_zxing_common_CharacterSetECI$_initialize$1() {
    com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1 = {};
    com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1 = {};
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(0, 'Cp437');
    com.google.zxing.common.CharacterSetECI._addCharacterSet2$1(1, [ 'ISO8859_1', 'ISO-8859-1' ]);
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(2, 'Cp437');
    com.google.zxing.common.CharacterSetECI._addCharacterSet2$1(3, [ 'ISO8859_1', 'ISO-8859-1' ]);
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(4, 'ISO8859_2');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(5, 'ISO8859_3');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(6, 'ISO8859_4');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(7, 'ISO8859_5');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(8, 'ISO8859_6');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(9, 'ISO8859_7');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(10, 'ISO8859_8');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(11, 'ISO8859_9');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(12, 'ISO8859_10');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(13, 'ISO8859_11');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(15, 'ISO8859_13');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(16, 'ISO8859_14');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(17, 'ISO8859_15');
    com.google.zxing.common.CharacterSetECI._addCharacterSet1$1(18, 'ISO8859_16');
    com.google.zxing.common.CharacterSetECI._addCharacterSet2$1(20, [ 'SJIS', 'Shift_JIS' ]);
}
com.google.zxing.common.CharacterSetECI._addCharacterSet1$1 = function com_google_zxing_common_CharacterSetECI$_addCharacterSet1$1(value_Renamed, encodingName) {
    var eci = new com.google.zxing.common.CharacterSetECI(value_Renamed, encodingName);
    com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1[value_Renamed] = eci;
    com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1[encodingName] = eci;
}
com.google.zxing.common.CharacterSetECI._addCharacterSet2$1 = function com_google_zxing_common_CharacterSetECI$_addCharacterSet2$1(value_Renamed, encodingNames) {
    var eci = new com.google.zxing.common.CharacterSetECI(value_Renamed, encodingNames[0]);
    com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1[value_Renamed] = eci;
    for (var i = 0; i < encodingNames.length; i++) {
        com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1[encodingNames[i]] = eci;
    }
}
com.google.zxing.common.CharacterSetECI.getCharacterSetECIByValue = function com_google_zxing_common_CharacterSetECI$getCharacterSetECIByValue(value_Renamed) {
    if (com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1 == null) {
        com.google.zxing.common.CharacterSetECI._initialize$1();
    }
    if (value_Renamed < 0 || value_Renamed >= 900) {
        throw new Error('Bad ECI value: ' + value_Renamed);
    }
    return com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1[value_Renamed];
}
com.google.zxing.common.CharacterSetECI.getCharacterSetECIByName = function com_google_zxing_common_CharacterSetECI$getCharacterSetECIByName(name) {
    if (com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1 == null) {
        com.google.zxing.common.CharacterSetECI._initialize$1();
    }
    return com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1[name];
}
com.google.zxing.common.CharacterSetECI.prototype = {
    
    get_encodingName: function com_google_zxing_common_CharacterSetECI$get_encodingName() {
        return this._encodingName$1;
    },
    
    _encodingName$1: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.Collections

com.google.zxing.common.Collections = function com_google_zxing_common_Collections() {
}
com.google.zxing.common.Collections.insertionSort = function com_google_zxing_common_Collections$insertionSort(vector, comparator) {
    var max = vector.length;
    for (var i = 1; i < max; i++) {
        var value_Renamed = vector[i];
        var j = i - 1;
        var valueB;
        while (j >= 0 && comparator.compare((valueB = vector[j]), value_Renamed) > 0) {
            vector[j + 1] = valueB;
            j--;
        }
        vector[j + 1] = value_Renamed;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.DecoderResult

com.google.zxing.common.DecoderResult = function com_google_zxing_common_DecoderResult(rawBytes, text, byteSegments, ecLevel) {
    if (rawBytes == null && text == null) {
        throw new Error('ArgumentException');
    }
    this._rawBytes = rawBytes;
    this._text = text;
    this._byteSegments = byteSegments;
    this._ecLevel = ecLevel;
}
com.google.zxing.common.DecoderResult.prototype = {
    
    get_rawBytes: function com_google_zxing_common_DecoderResult$get_rawBytes() {
        return this._rawBytes;
    },
    
    get_text: function com_google_zxing_common_DecoderResult$get_text() {
        return this._text;
    },
    
    get_byteSegments: function com_google_zxing_common_DecoderResult$get_byteSegments() {
        return this._byteSegments;
    },
    
    get_ecLevel: function com_google_zxing_common_DecoderResult$get_ecLevel() {
        return this._ecLevel;
    },
    
    _rawBytes: null,
    _text: null,
    _byteSegments: null,
    _ecLevel: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.DefaultGridSampler

com.google.zxing.common.DefaultGridSampler = function com_google_zxing_common_DefaultGridSampler() {
    com.google.zxing.common.DefaultGridSampler.initializeBase(this);
}
com.google.zxing.common.DefaultGridSampler.prototype = {
    
    sampleGrid1: function com_google_zxing_common_DefaultGridSampler$sampleGrid1(image, dimension, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
        var transform = com.google.zxing.common.PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
        return this.sampleGrid2(image, dimension, transform);
    },
    
    sampleGrid2: function com_google_zxing_common_DefaultGridSampler$sampleGrid2(image, dimension, transform) {
        var bits = com.google.zxing.common.BitMatrix.createSquareInstance(dimension);
        var points = new Array(dimension << 1);
        for (var y = 0; y < dimension; y++) {
            var max = points.length;
            var iValue = y + 0.5;
            for (var x = 0; x < max; x += 2) {
                points[x] = (x >> 1) + 0.5;
                points[x + 1] = iValue;
            }
            transform.transformPoints1(points);
            com.google.zxing.common.GridSampler.checkAndNudgePoints(image, points);
            try {
                for (var x = 0; x < max; x += 2) {
                    if (image.get_Renamed(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                        bits.set_Renamed(x >> 1, y);
                    }
                }
            }
            catch ($e1) {
                throw new Error('ReaderException');
            }
        }
        return bits;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.DetectorResult

com.google.zxing.common.DetectorResult = function com_google_zxing_common_DetectorResult(bits, points) {
    this._bits = bits;
    this._points = points;
}
com.google.zxing.common.DetectorResult.prototype = {
    
    get_bits: function com_google_zxing_common_DetectorResult$get_bits() {
        return this._bits;
    },
    
    get_points: function com_google_zxing_common_DetectorResult$get_points() {
        return this._points;
    },
    
    _bits: null,
    _points: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.ECI

com.google.zxing.common.ECI = function com_google_zxing_common_ECI(value_Renamed) {
    this._value_Renamed = value_Renamed;
}
com.google.zxing.common.ECI.getECIByValue = function com_google_zxing_common_ECI$getECIByValue(value_Renamed) {
    if (value_Renamed < 0 || value_Renamed > 999999) {
        throw new Error('Bad ECI value: ' + value_Renamed);
    }
    if (value_Renamed < 900) {
        return com.google.zxing.common.CharacterSetECI.getCharacterSetECIByValue(value_Renamed);
    }
    return null;
}
com.google.zxing.common.ECI.prototype = {
    
    get_value: function com_google_zxing_common_ECI$get_value() {
        return this._value_Renamed;
    },
    
    _value_Renamed: 0
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.GlobalHistogramBinarizer

com.google.zxing.common.GlobalHistogramBinarizer = function com_google_zxing_common_GlobalHistogramBinarizer(source) {
    com.google.zxing.common.GlobalHistogramBinarizer.initializeBase(this, [ source ]);
}
com.google.zxing.common.GlobalHistogramBinarizer._estimateBlackPoint$1 = function com_google_zxing_common_GlobalHistogramBinarizer$_estimateBlackPoint$1(buckets) {
    var numBuckets = buckets.length;
    var maxBucketCount = 0;
    var firstPeak = 0;
    var firstPeakSize = 0;
    for (var x = 0; x < numBuckets; x++) {
        if (buckets[x] > firstPeakSize) {
            firstPeak = x;
            firstPeakSize = buckets[x];
        }
        if (buckets[x] > maxBucketCount) {
            maxBucketCount = buckets[x];
        }
    }
    var secondPeak = 0;
    var secondPeakScore = 0;
    for (var x = 0; x < numBuckets; x++) {
        var distanceToBiggest = x - firstPeak;
        var score = buckets[x] * distanceToBiggest * distanceToBiggest;
        if (score > secondPeakScore) {
            secondPeak = x;
            secondPeakScore = score;
        }
    }
    if (firstPeak > secondPeak) {
        var temp = firstPeak;
        firstPeak = secondPeak;
        secondPeak = temp;
    }
    if (secondPeak - firstPeak <= numBuckets >> 4) {
        throw new Error('ReaderException');
    }
    var bestValley = secondPeak - 1;
    var bestValleyScore = -1;
    for (var x = secondPeak - 1; x > firstPeak; x--) {
        var fromFirst = x - firstPeak;
        var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
        if (score > bestValleyScore) {
            bestValley = x;
            bestValleyScore = score;
        }
    }
    return bestValley << com.google.zxing.common.GlobalHistogramBinarizer._luminancE_SHIFT$1;
}
com.google.zxing.common.GlobalHistogramBinarizer.prototype = {
    
    get_blackMatrix: function com_google_zxing_common_GlobalHistogramBinarizer$get_blackMatrix() {
        var source = this.get_luminanceSource();
        var localLuminances;
        var width = source.get_width();
        var height = source.get_height();
        var matrix = new com.google.zxing.common.BitMatrix(width, height);
        this._initArrays$1(width);
        var localBuckets = this._buckets$1;
        for (var y = 1; y < 5; y++) {
            var row = Math.floor(height * y / 5);
            localLuminances = source.getRow(row, this._luminances$1);
            var right = Math.floor((width << 2) / 5);
            for (var x = Math.floor(width / 5); x < right; x++) {
                var pixel = localLuminances[x] & 255;
                localBuckets[pixel >> com.google.zxing.common.GlobalHistogramBinarizer._luminancE_SHIFT$1]++;
            }
        }
        var blackPoint = com.google.zxing.common.GlobalHistogramBinarizer._estimateBlackPoint$1(localBuckets);
        localLuminances = source.get_matrix();
        for (var y = 0; y < height; y++) {
            var offset = y * width;
            for (var x = 0; x < width; x++) {
                var pixel = localLuminances[offset + x] & 255;
                if (pixel < blackPoint) {
                    matrix.set_Renamed(x, y);
                }
            }
        }
        return matrix;
    },
    
    _luminances$1: null,
    _buckets$1: null,
    
    getBlackRow: function com_google_zxing_common_GlobalHistogramBinarizer$getBlackRow(y, row) {
        var source = this.get_luminanceSource();
        var width = source.get_width();
        if (row == null || row.get_size() < width) {
            row = new com.google.zxing.common.BitArray(width);
        }
        else {
            row.clear();
        }
        this._initArrays$1(width);
        var localLuminances = source.getRow(y, this._luminances$1);
        var localBuckets = this._buckets$1;
        for (var x = 0; x < width; x++) {
            var pixel = localLuminances[x] & 255;
            localBuckets[pixel >> com.google.zxing.common.GlobalHistogramBinarizer._luminancE_SHIFT$1]++;
        }
        var blackPoint = com.google.zxing.common.GlobalHistogramBinarizer._estimateBlackPoint$1(localBuckets);
        var left = localLuminances[0] & 255;
        var center = localLuminances[1] & 255;
        for (var x = 1; x < width - 1; x++) {
            var right = localLuminances[x + 1] & 255;
            var luminance = ((center << 2) - left - right) >> 1;
            if (luminance < blackPoint) {
                row.set_Renamed(x);
            }
            left = center;
            center = right;
        }
        return row;
    },
    
    createBinarizer: function com_google_zxing_common_GlobalHistogramBinarizer$createBinarizer(source) {
        return new com.google.zxing.common.GlobalHistogramBinarizer(source);
    },
    
    _initArrays$1: function com_google_zxing_common_GlobalHistogramBinarizer$_initArrays$1(luminanceSize) {
        if (this._luminances$1 == null || this._luminances$1.length < luminanceSize) {
            this._luminances$1 = new Array(luminanceSize);
        }
        if (this._buckets$1 == null) {
            this._buckets$1 = new Array(com.google.zxing.common.GlobalHistogramBinarizer._luminancE_BUCKETS$1);
        }
        else {
            for (var x = 0; x < com.google.zxing.common.GlobalHistogramBinarizer._luminancE_BUCKETS$1; x++) {
                this._buckets$1[x] = 0;
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.GridSampler

com.google.zxing.common.GridSampler = function com_google_zxing_common_GridSampler() {
}
com.google.zxing.common.GridSampler.get_instance = function com_google_zxing_common_GridSampler$get_instance() {
    return com.google.zxing.common.GridSampler._gridSampler;
}
com.google.zxing.common.GridSampler.setGridSampler = function com_google_zxing_common_GridSampler$setGridSampler(newGridSampler) {
    if (newGridSampler == null) {
        throw new Error('ArgumentException');
    }
    com.google.zxing.common.GridSampler._gridSampler = newGridSampler;
}
com.google.zxing.common.GridSampler.checkAndNudgePoints = function com_google_zxing_common_GridSampler$checkAndNudgePoints(image, points) {
    var width = image.get_width();
    var height = image.get_height();
    var nudged = true;
    for (var offset = 0; offset < points.length && nudged; offset += 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
            throw new Error('ReaderException');
        }
        nudged = false;
        if (x === -1) {
            points[offset] = 0;
            nudged = true;
        }
        else if (x === width) {
            points[offset] = width - 1;
            nudged = true;
        }
        if (y === -1) {
            points[offset + 1] = 0;
            nudged = true;
        }
        else if (y === height) {
            points[offset + 1] = height - 1;
            nudged = true;
        }
    }
    nudged = true;
    for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
            throw new Error('ReaderException');
        }
        nudged = false;
        if (x === -1) {
            points[offset] = 0;
            nudged = true;
        }
        else if (x === width) {
            points[offset] = width - 1;
            nudged = true;
        }
        if (y === -1) {
            points[offset + 1] = 0;
            nudged = true;
        }
        else if (y === height) {
            points[offset + 1] = height - 1;
            nudged = true;
        }
    }
}
com.google.zxing.common.GridSampler.prototype = {
    
    sampleGrid2: function com_google_zxing_common_GridSampler$sampleGrid2(image, dimension, transform) {
        throw new Error('NotSupportedException');
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.HybridBinarizer

com.google.zxing.common.HybridBinarizer = function com_google_zxing_common_HybridBinarizer(source) {
    com.google.zxing.common.HybridBinarizer.initializeBase(this, [ source ]);
}
com.google.zxing.common.HybridBinarizer._calculateThresholdForBlock$2 = function com_google_zxing_common_HybridBinarizer$_calculateThresholdForBlock$2(luminances, subWidth, subHeight, stride, blackPoints, matrix) {
    for (var y = 0; y < subHeight; y++) {
        for (var x = 0; x < subWidth; x++) {
            var left = (x > 1) ? x : 2;
            left = (left < subWidth - 2) ? left : subWidth - 3;
            var top = (y > 1) ? y : 2;
            top = (top < subHeight - 2) ? top : subHeight - 3;
            var sum = 0;
            for (var z = -2; z <= 2; z++) {
                var blackRow = blackPoints[top + z];
                sum += blackRow[left - 2];
                sum += blackRow[left - 1];
                sum += blackRow[left];
                sum += blackRow[left + 1];
                sum += blackRow[left + 2];
            }
            var average = Math.floor(sum / 25);
            com.google.zxing.common.HybridBinarizer._threshold8x8Block$2(luminances, x << 3, y << 3, average, stride, matrix);
        }
    }
}
com.google.zxing.common.HybridBinarizer._threshold8x8Block$2 = function com_google_zxing_common_HybridBinarizer$_threshold8x8Block$2(luminances, xoffset, yoffset, threshold, stride, matrix) {
    for (var y = 0; y < 8; y++) {
        var offset = (yoffset + y) * stride + xoffset;
        for (var x = 0; x < 8; x++) {
            var pixel = luminances[offset + x] & 255;
            if (pixel < threshold) {
                matrix.set_Renamed(xoffset + x, yoffset + y);
            }
        }
    }
}
com.google.zxing.common.HybridBinarizer._calculateBlackPoints$2 = function com_google_zxing_common_HybridBinarizer$_calculateBlackPoints$2(luminances, subWidth, subHeight, stride) {
    var blackPoints = new Array(subHeight);
    for (var i = 0; i < subHeight; i++) {
        blackPoints[i] = new Array(subWidth);
    }
    for (var y = 0; y < subHeight; y++) {
        for (var x = 0; x < subWidth; x++) {
            var sum = 0;
            var min = 255;
            var max = 0;
            for (var yy = 0; yy < 8; yy++) {
                var offset = ((y << 3) + yy) * stride + (x << 3);
                for (var xx = 0; xx < 8; xx++) {
                    var pixel = luminances[offset + xx] & 255;
                    sum += pixel;
                    if (pixel < min) {
                        min = pixel;
                    }
                    if (pixel > max) {
                        max = pixel;
                    }
                }
            }
            var average = (max - min > 24) ? (sum >> 6) : (min >> 1);
            blackPoints[y][x] = average;
        }
    }
    return blackPoints;
}
com.google.zxing.common.HybridBinarizer.prototype = {
    
    get_blackMatrix: function com_google_zxing_common_HybridBinarizer$get_blackMatrix() {
        this._binarizeEntireImage$2();
        return this._matrix$2;
    },
    
    _matrix$2: null,
    
    createBinarizer: function com_google_zxing_common_HybridBinarizer$createBinarizer(source) {
        return new com.google.zxing.common.HybridBinarizer(source);
    },
    
    _binarizeEntireImage$2: function com_google_zxing_common_HybridBinarizer$_binarizeEntireImage$2() {
        if (this._matrix$2 == null) {
            var source = this.get_luminanceSource();
            if (source.get_width() >= 40 && source.get_height() >= 40) {
                var luminances = source.get_matrix();
                var width = source.get_width();
                var height = source.get_height();
                var subWidth = width >> 3;
                var subHeight = height >> 3;
                var blackPoints = com.google.zxing.common.HybridBinarizer._calculateBlackPoints$2(luminances, subWidth, subHeight, width);
                this._matrix$2 = new com.google.zxing.common.BitMatrix(width, height);
                com.google.zxing.common.HybridBinarizer._calculateThresholdForBlock$2(luminances, subWidth, subHeight, width, blackPoints, this._matrix$2);
            }
            else {
                this._matrix$2 = com.google.zxing.common.HybridBinarizer.callBaseMethod(this, 'get_blackMatrix');
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.PerspectiveTransform

com.google.zxing.common.PerspectiveTransform = function com_google_zxing_common_PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
    this._a11 = a11;
    this._a12 = a12;
    this._a13 = a13;
    this._a21 = a21;
    this._a22 = a22;
    this._a23 = a23;
    this._a31 = a31;
    this._a32 = a32;
    this._a33 = a33;
}
com.google.zxing.common.PerspectiveTransform.quadrilateralToQuadrilateral = function com_google_zxing_common_PerspectiveTransform$quadrilateralToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
    var qToS = com.google.zxing.common.PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
    var sToQ = com.google.zxing.common.PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
    return sToQ._times(qToS);
}
com.google.zxing.common.PerspectiveTransform.squareToQuadrilateral = function com_google_zxing_common_PerspectiveTransform$squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3) {
    var dy2 = y3 - y2;
    var dy3 = y0 - y1 + y2 - y3;
    if (dy2 === 0 && dy3 === 0) {
        return new com.google.zxing.common.PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
    }
    else {
        var dx1 = x1 - x2;
        var dx2 = x3 - x2;
        var dx3 = x0 - x1 + x2 - x3;
        var dy1 = y1 - y2;
        var denominator = dx1 * dy2 - dx2 * dy1;
        var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
        var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
        return new com.google.zxing.common.PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
    }
}
com.google.zxing.common.PerspectiveTransform.quadrilateralToSquare = function com_google_zxing_common_PerspectiveTransform$quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3) {
    return com.google.zxing.common.PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3)._buildAdjoint();
}
com.google.zxing.common.PerspectiveTransform.prototype = {
    _a11: 0,
    _a12: 0,
    _a13: 0,
    _a21: 0,
    _a22: 0,
    _a23: 0,
    _a31: 0,
    _a32: 0,
    _a33: 0,
    
    transformPoints1: function com_google_zxing_common_PerspectiveTransform$transformPoints1(points) {
        var max = points.length;
        var a11 = this._a11;
        var a12 = this._a12;
        var a13 = this._a13;
        var a21 = this._a21;
        var a22 = this._a22;
        var a23 = this._a23;
        var a31 = this._a31;
        var a32 = this._a32;
        var a33 = this._a33;
        for (var i = 0; i < max; i += 2) {
            var x = points[i];
            var y = points[i + 1];
            var denominator = a13 * x + a23 * y + a33;
            points[i] = (a11 * x + a21 * y + a31) / denominator;
            points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
        }
    },
    
    transformPoints2: function com_google_zxing_common_PerspectiveTransform$transformPoints2(xValues, yValues) {
        var n = xValues.length;
        for (var i = 0; i < n; i++) {
            var x = xValues[i];
            var y = yValues[i];
            var denominator = this._a13 * x + this._a23 * y + this._a33;
            xValues[i] = (this._a11 * x + this._a21 * y + this._a31) / denominator;
            yValues[i] = (this._a12 * x + this._a22 * y + this._a32) / denominator;
        }
    },
    
    _buildAdjoint: function com_google_zxing_common_PerspectiveTransform$_buildAdjoint() {
        return new com.google.zxing.common.PerspectiveTransform(this._a22 * this._a33 - this._a23 * this._a32, this._a23 * this._a31 - this._a21 * this._a33, this._a21 * this._a32 - this._a22 * this._a31, this._a13 * this._a32 - this._a12 * this._a33, this._a11 * this._a33 - this._a13 * this._a31, this._a12 * this._a31 - this._a11 * this._a32, this._a12 * this._a23 - this._a13 * this._a22, this._a13 * this._a21 - this._a11 * this._a23, this._a11 * this._a22 - this._a12 * this._a21);
    },
    
    _times: function com_google_zxing_common_PerspectiveTransform$_times(other) {
        return new com.google.zxing.common.PerspectiveTransform(this._a11 * other._a11 + this._a21 * other._a12 + this._a31 * other._a13, this._a11 * other._a21 + this._a21 * other._a22 + this._a31 * other._a23, this._a11 * other._a31 + this._a21 * other._a32 + this._a31 * other._a33, this._a12 * other._a11 + this._a22 * other._a12 + this._a32 * other._a13, this._a12 * other._a21 + this._a22 * other._a22 + this._a32 * other._a23, this._a12 * other._a31 + this._a22 * other._a32 + this._a32 * other._a33, this._a13 * other._a11 + this._a23 * other._a12 + this._a33 * other._a13, this._a13 * other._a21 + this._a23 * other._a22 + this._a33 * other._a23, this._a13 * other._a31 + this._a23 * other._a32 + this._a33 * other._a33);
    }
}


Type.registerNamespace('com.google.zxing.common.detector');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.detector.MonochromeRectangleDetector

com.google.zxing.common.detector.MonochromeRectangleDetector = function com_google_zxing_common_detector_MonochromeRectangleDetector(image) {
    this._image = image;
}
com.google.zxing.common.detector.MonochromeRectangleDetector.prototype = {
    _image: null,
    
    detect: function com_google_zxing_common_detector_MonochromeRectangleDetector$detect() {
        var height = this._image.get_height();
        var width = this._image.get_width();
        var halfHeight = height >> 1;
        var halfWidth = width >> 1;
        var deltaY = Math.max(1, Math.floor(height / (32 << 3)));
        var deltaX = Math.max(1, Math.floor(width / (32 << 3)));
        var top = 0;
        var bottom = height;
        var left = 0;
        var right = width;
        var pointA = this._findCornerFromCenter(halfWidth, 0, left, right, halfHeight, -deltaY, top, bottom, halfWidth >> 1);
        top = Math.floor(pointA.get_y()) - 1;
        var pointB = this._findCornerFromCenter(halfWidth, -deltaX, left, right, halfHeight, 0, top, bottom, halfHeight >> 1);
        left = Math.floor(pointB.get_x()) - 1;
        var pointC = this._findCornerFromCenter(halfWidth, deltaX, left, right, halfHeight, 0, top, bottom, halfHeight >> 1);
        right = Math.floor(pointC.get_x()) + 1;
        var pointD = this._findCornerFromCenter(halfWidth, 0, left, right, halfHeight, deltaY, top, bottom, halfWidth >> 1);
        bottom = Math.floor(pointD.get_y()) + 1;
        pointA = this._findCornerFromCenter(halfWidth, 0, left, right, halfHeight, -deltaY, top, bottom, halfWidth >> 2);
        return [ pointA, pointB, pointC, pointD ];
    },
    
    _findCornerFromCenter: function com_google_zxing_common_detector_MonochromeRectangleDetector$_findCornerFromCenter(centerX, deltaX, left, right, centerY, deltaY, top, bottom, maxWhiteRun) {
        var lastRange = null;
        for (var y = centerY, x = centerX; y < bottom && y >= top && x < right && x >= left; y += deltaY, x += deltaX) {
            var range;
            if (!deltaX) {
                range = this._blackWhiteRange(y, maxWhiteRun, left, right, true);
            }
            else {
                range = this._blackWhiteRange(x, maxWhiteRun, top, bottom, false);
            }
            if (range == null) {
                if (lastRange == null) {
                    throw new Error('ReaderException');
                }
                if (!deltaX) {
                    var lastY = y - deltaY;
                    if (lastRange[0] < centerX) {
                        if (lastRange[1] > centerX) {
                            return new com.google.zxing.ResultPoint((deltaY > 0) ? lastRange[0] : lastRange[1], lastY);
                        }
                        return new com.google.zxing.ResultPoint(lastRange[0], lastY);
                    }
                    else {
                        return new com.google.zxing.ResultPoint(lastRange[1], lastY);
                    }
                }
                else {
                    var lastX = x - deltaX;
                    if (lastRange[0] < centerY) {
                        if (lastRange[1] > centerY) {
                            return new com.google.zxing.ResultPoint(lastX, (deltaX < 0) ? lastRange[0] : lastRange[1]);
                        }
                        return new com.google.zxing.ResultPoint(lastX, lastRange[0]);
                    }
                    else {
                        return new com.google.zxing.ResultPoint(lastX, lastRange[1]);
                    }
                }
            }
            lastRange = range;
        }
        throw new Error('ReaderException');
    },
    
    _blackWhiteRange: function com_google_zxing_common_detector_MonochromeRectangleDetector$_blackWhiteRange(fixedDimension, maxWhiteRun, minDim, maxDim, horizontal) {
        var center = (minDim + maxDim) >> 1;
        var start = center;
        while (start >= minDim) {
            if ((horizontal) ? this._image.get_Renamed(start, fixedDimension) : this._image.get_Renamed(fixedDimension, start)) {
                start--;
            }
            else {
                var whiteRunStart = start;
                do {
                    start--;
                } while (start >= minDim && !((horizontal) ? this._image.get_Renamed(start, fixedDimension) : this._image.get_Renamed(fixedDimension, start)));
                var whiteRunSize = whiteRunStart - start;
                if (start < minDim || whiteRunSize > maxWhiteRun) {
                    start = whiteRunStart;
                    break;
                }
            }
        }
        start++;
        var end = center;
        while (end < maxDim) {
            if ((horizontal) ? this._image.get_Renamed(end, fixedDimension) : this._image.get_Renamed(fixedDimension, end)) {
                end++;
            }
            else {
                var whiteRunStart = end;
                do {
                    end++;
                } while (end < maxDim && !((horizontal) ? this._image.get_Renamed(end, fixedDimension) : this._image.get_Renamed(fixedDimension, end)));
                var whiteRunSize = end - whiteRunStart;
                if (end >= maxDim || whiteRunSize > maxWhiteRun) {
                    end = whiteRunStart;
                    break;
                }
            }
        }
        end--;
        return (end > start) ? [ start, end ] : null;
    }
}


Type.registerNamespace('com.google.zxing.common.reedsolomon');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.reedsolomon.GF256

com.google.zxing.common.reedsolomon.GF256 = function com_google_zxing_common_reedsolomon_GF256(primitive) {
    this._expTable = new Array(256);
    this._logTable = new Array(256);
    var x = 1;
    for (var i = 0; i < 256; i++) {
        this._expTable[i] = x;
        x <<= 1;
        if (x >= 256) {
            x ^= primitive;
        }
    }
    for (var i = 0; i < 255; i++) {
        this._logTable[this._expTable[i]] = i;
    }
    this._zero = new com.google.zxing.common.reedsolomon._gF256Poly(this, [ 0 ]);
    this._one = new com.google.zxing.common.reedsolomon._gF256Poly(this, [ 1 ]);
}
com.google.zxing.common.reedsolomon.GF256._addOrSubtract = function com_google_zxing_common_reedsolomon_GF256$_addOrSubtract(a, b) {
    return a ^ b;
}
com.google.zxing.common.reedsolomon.GF256.prototype = {
    
    get__zero: function com_google_zxing_common_reedsolomon_GF256$get__zero() {
        return this._zero;
    },
    
    get__one: function com_google_zxing_common_reedsolomon_GF256$get__one() {
        return this._one;
    },
    
    _expTable: null,
    _logTable: null,
    _zero: null,
    _one: null,
    
    _buildMonomial: function com_google_zxing_common_reedsolomon_GF256$_buildMonomial(degree, coefficient) {
        if (degree < 0) {
            throw new Error('ArgumentException');
        }
        if (!coefficient) {
            return this._zero;
        }
        var coefficients = new Array(degree + 1);
        coefficients[0] = coefficient;
        return new com.google.zxing.common.reedsolomon._gF256Poly(this, coefficients);
    },
    
    _exp: function com_google_zxing_common_reedsolomon_GF256$_exp(a) {
        return this._expTable[a];
    },
    
    _log: function com_google_zxing_common_reedsolomon_GF256$_log(a) {
        if (!a) {
            throw new Error('ArgumentException');
        }
        return this._logTable[a];
    },
    
    _inverse: function com_google_zxing_common_reedsolomon_GF256$_inverse(a) {
        if (!a) {
            throw new Error('ArithmeticException');
        }
        return this._expTable[255 - this._logTable[a]];
    },
    
    _multiply: function com_google_zxing_common_reedsolomon_GF256$_multiply(a, b) {
        if (!a || !b) {
            return 0;
        }
        if (a === 1) {
            return b;
        }
        if (b === 1) {
            return a;
        }
        return this._expTable[(this._logTable[a] + this._logTable[b]) % 255];
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.reedsolomon._gF256Poly

com.google.zxing.common.reedsolomon._gF256Poly = function com_google_zxing_common_reedsolomon__gF256Poly(field, coefficients) {
    if (coefficients == null || !coefficients.length) {
        throw new Error('ArgumentException');
    }
    this._field = field;
    var coefficientsLength = coefficients.length;
    if (coefficientsLength > 1 && !coefficients[0]) {
        var firstNonZero = 1;
        while (firstNonZero < coefficientsLength && !coefficients[firstNonZero]) {
            firstNonZero++;
        }
        if (firstNonZero === coefficientsLength) {
            this._coefficients = field.get__zero()._coefficients;
        }
        else {
            this._coefficients = new Array(coefficientsLength - firstNonZero);
            SystemExtend.ArrayExtend.copy(coefficients, firstNonZero, this._coefficients, 0, this._coefficients.length);
        }
    }
    else {
        this._coefficients = coefficients;
    }
}
com.google.zxing.common.reedsolomon._gF256Poly.prototype = {
    
    get__coefficients: function com_google_zxing_common_reedsolomon__gF256Poly$get__coefficients() {
        return this._coefficients;
    },
    
    get__degree: function com_google_zxing_common_reedsolomon__gF256Poly$get__degree() {
        return this._coefficients.length - 1;
    },
    
    get__zero: function com_google_zxing_common_reedsolomon__gF256Poly$get__zero() {
        return !this._coefficients[0];
    },
    
    _field: null,
    _coefficients: null,
    
    _getCoefficient: function com_google_zxing_common_reedsolomon__gF256Poly$_getCoefficient(degree) {
        return this._coefficients[this._coefficients.length - 1 - degree];
    },
    
    _evaluateAt: function com_google_zxing_common_reedsolomon__gF256Poly$_evaluateAt(a) {
        if (!a) {
            return this._getCoefficient(0);
        }
        var size = this._coefficients.length;
        if (a === 1) {
            var result = 0;
            for (var i = 0; i < size; i++) {
                result = com.google.zxing.common.reedsolomon.GF256._addOrSubtract(result, this._coefficients[i]);
            }
            return result;
        }
        var result2 = this._coefficients[0];
        for (var i = 1; i < size; i++) {
            result2 = com.google.zxing.common.reedsolomon.GF256._addOrSubtract(this._field._multiply(a, result2), this._coefficients[i]);
        }
        return result2;
    },
    
    _addOrSubtract: function com_google_zxing_common_reedsolomon__gF256Poly$_addOrSubtract(other) {
        if (!(this._field === other._field)) {
            throw new Error('GF256Polys do not have same GF256 field');
        }
        if (this.get__zero()) {
            return other;
        }
        if (other.get__zero()) {
            return this;
        }
        var smallerCoefficients = this._coefficients;
        var largerCoefficients = other._coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            var temp = smallerCoefficients;
            smallerCoefficients = largerCoefficients;
            largerCoefficients = temp;
        }
        var sumDiff = new Array(largerCoefficients.length);
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        SystemExtend.ArrayExtend.copy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = com.google.zxing.common.reedsolomon.GF256._addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new com.google.zxing.common.reedsolomon._gF256Poly(this._field, sumDiff);
    },
    
    _multiply1: function com_google_zxing_common_reedsolomon__gF256Poly$_multiply1(other) {
        if (!(this._field === other._field)) {
            throw new Error('GF256Polys do not have same GF256 field');
        }
        if (this.get__zero() || other.get__zero()) {
            return this._field.get__zero();
        }
        var aCoefficients = this._coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other._coefficients;
        var bLength = bCoefficients.length;
        var product = new Array(aLength + bLength - 1);
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = com.google.zxing.common.reedsolomon.GF256._addOrSubtract(product[i + j], this._field._multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new com.google.zxing.common.reedsolomon._gF256Poly(this._field, product);
    },
    
    _multiply2: function com_google_zxing_common_reedsolomon__gF256Poly$_multiply2(scalar) {
        if (!scalar) {
            return this._field.get__zero();
        }
        if (scalar === 1) {
            return this;
        }
        var size = this._coefficients.length;
        var product = new Array(size);
        for (var i = 0; i < size; i++) {
            product[i] = this._field._multiply(this._coefficients[i], scalar);
        }
        return new com.google.zxing.common.reedsolomon._gF256Poly(this._field, product);
    },
    
    _multiplyByMonomial: function com_google_zxing_common_reedsolomon__gF256Poly$_multiplyByMonomial(degree, coefficient) {
        if (degree < 0) {
            throw new Error('ArgumentException');
        }
        if (!coefficient) {
            return this._field.get__zero();
        }
        var size = this._coefficients.length;
        var product = new Array(size + degree);
        for (var i = 0; i < size; i++) {
            product[i] = this._field._multiply(this._coefficients[i], coefficient);
        }
        return new com.google.zxing.common.reedsolomon._gF256Poly(this._field, product);
    },
    
    _divide: function com_google_zxing_common_reedsolomon__gF256Poly$_divide(other) {
        if (!(this._field === other._field)) {
            throw new Error('GF256Polys do not have same GF256 field');
        }
        if (other.get__zero()) {
            throw new Error('Divide by 0');
        }
        var quotient = this._field.get__zero();
        var remainder = this;
        var denominatorLeadingTerm = other._getCoefficient(other.get__degree());
        var inverseDenominatorLeadingTerm = this._field._inverse(denominatorLeadingTerm);
        while (remainder.get__degree() >= other.get__degree() && !remainder.get__zero()) {
            var degreeDifference = remainder.get__degree() - other.get__degree();
            var scale = this._field._multiply(remainder._getCoefficient(remainder.get__degree()), inverseDenominatorLeadingTerm);
            var term = other._multiplyByMonomial(degreeDifference, scale);
            var iterationQuotient = this._field._buildMonomial(degreeDifference, scale);
            quotient = quotient._addOrSubtract(iterationQuotient);
            remainder = remainder._addOrSubtract(term);
        }
        return [ quotient, remainder ];
    },
    
    toString: function com_google_zxing_common_reedsolomon__gF256Poly$toString() {
        var result = new ss.StringBuilder();
        for (var degree = this.get__degree(); degree >= 0; degree--) {
            var coefficient = this._getCoefficient(degree);
            if (!!coefficient) {
                if (coefficient < 0) {
                    result.append(' - ');
                    coefficient = -coefficient;
                }
                else {
                    if (result.toString().length > 0) {
                        result.append(' + ');
                    }
                }
                if (!degree || coefficient !== 1) {
                    var alphaPower = this._field._log(coefficient);
                    if (!alphaPower) {
                        result.append('1');
                    }
                    else if (alphaPower === 1) {
                        result.append('a');
                    }
                    else {
                        result.append('a^');
                        result.append(alphaPower);
                    }
                }
                if (!!degree) {
                    if (degree === 1) {
                        result.append('x');
                    }
                    else {
                        result.append('x^');
                        result.append(degree);
                    }
                }
            }
        }
        return result.toString();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.reedsolomon.ReedSolomonDecoder

com.google.zxing.common.reedsolomon.ReedSolomonDecoder = function com_google_zxing_common_reedsolomon_ReedSolomonDecoder(field) {
    this._field = field;
}
com.google.zxing.common.reedsolomon.ReedSolomonDecoder.prototype = {
    _field: null,
    
    decode: function com_google_zxing_common_reedsolomon_ReedSolomonDecoder$decode(received, twoS) {
        var poly = new com.google.zxing.common.reedsolomon._gF256Poly(this._field, received);
        var syndromeCoefficients = new Array(twoS);
        var dataMatrix = this._field === com.google.zxing.common.reedsolomon.GF256.datA_MATRIX_FIELD;
        var noError = true;
        for (var i = 0; i < twoS; i++) {
            var eval = poly._evaluateAt(this._field._exp((dataMatrix) ? i + 1 : i));
            syndromeCoefficients[syndromeCoefficients.length - 1 - i] = eval;
            if (!!eval) {
                noError = false;
            }
        }
        if (noError) {
            return;
        }
        var syndrome = new com.google.zxing.common.reedsolomon._gF256Poly(this._field, syndromeCoefficients);
        var sigmaOmega = this._runEuclideanAlgorithm(this._field._buildMonomial(twoS, 1), syndrome, twoS);
        var sigma = sigmaOmega[0];
        var omega = sigmaOmega[1];
        var errorLocations = this._findErrorLocations(sigma);
        var errorMagnitudes = this._findErrorMagnitudes(omega, errorLocations, dataMatrix);
        for (var i = 0; i < errorLocations.length; i++) {
            var position = received.length - 1 - this._field._log(errorLocations[i]);
            if (position < 0) {
                throw new Error('ReedSolomonException: Bad error location');
            }
            received[position] = com.google.zxing.common.reedsolomon.GF256._addOrSubtract(received[position], errorMagnitudes[i]);
        }
    },
    
    _runEuclideanAlgorithm: function com_google_zxing_common_reedsolomon_ReedSolomonDecoder$_runEuclideanAlgorithm(a, b, R) {
        if (a.get__degree() < b.get__degree()) {
            var temp = a;
            a = b;
            b = temp;
        }
        var rLast = a;
        var r = b;
        var sLast = this._field.get__one();
        var s = this._field.get__zero();
        var tLast = this._field.get__zero();
        var t = this._field.get__one();
        while (r.get__degree() >= Math.floor(R / 2)) {
            var rLastLast = rLast;
            var sLastLast = sLast;
            var tLastLast = tLast;
            rLast = r;
            sLast = s;
            tLast = t;
            if (rLast.get__zero()) {
                throw new Error('ReedSolomonException: r_{i-1} was zero');
            }
            r = rLastLast;
            var q = this._field.get__zero();
            var denominatorLeadingTerm = rLast._getCoefficient(rLast.get__degree());
            var dltInverse = this._field._inverse(denominatorLeadingTerm);
            while (r.get__degree() >= rLast.get__degree() && !r.get__zero()) {
                var degreeDiff = r.get__degree() - rLast.get__degree();
                var scale = this._field._multiply(r._getCoefficient(r.get__degree()), dltInverse);
                q = q._addOrSubtract(this._field._buildMonomial(degreeDiff, scale));
                r = r._addOrSubtract(rLast._multiplyByMonomial(degreeDiff, scale));
            }
            s = q._multiply1(sLast)._addOrSubtract(sLastLast);
            t = q._multiply1(tLast)._addOrSubtract(tLastLast);
        }
        var sigmaTildeAtZero = t._getCoefficient(0);
        if (!sigmaTildeAtZero) {
            throw new Error('ReedSolomonException: sigmaTilde(0) was zero');
        }
        var inverse = this._field._inverse(sigmaTildeAtZero);
        var sigma = t._multiply2(inverse);
        var omega = r._multiply2(inverse);
        return [ sigma, omega ];
    },
    
    _findErrorLocations: function com_google_zxing_common_reedsolomon_ReedSolomonDecoder$_findErrorLocations(errorLocator) {
        var numErrors = errorLocator.get__degree();
        if (numErrors === 1) {
            return [ errorLocator._getCoefficient(1) ];
        }
        var result = new Array(numErrors);
        var e = 0;
        for (var i = 1; i < 256 && e < numErrors; i++) {
            if (!errorLocator._evaluateAt(i)) {
                result[e] = this._field._inverse(i);
                e++;
            }
        }
        if (e !== numErrors) {
            throw new Error('ReedSolomonException: Error locator degree does not match number of roots');
        }
        return result;
    },
    
    _findErrorMagnitudes: function com_google_zxing_common_reedsolomon_ReedSolomonDecoder$_findErrorMagnitudes(errorEvaluator, errorLocations, dataMatrix) {
        var s = errorLocations.length;
        var result = new Array(s);
        for (var i = 0; i < s; i++) {
            var xiInverse = this._field._inverse(errorLocations[i]);
            var denominator = 1;
            for (var j = 0; j < s; j++) {
                if (i !== j) {
                    denominator = this._field._multiply(denominator, com.google.zxing.common.reedsolomon.GF256._addOrSubtract(1, this._field._multiply(errorLocations[j], xiInverse)));
                }
            }
            result[i] = this._field._multiply(errorEvaluator._evaluateAt(xiInverse), this._field._inverse(denominator));
            if (dataMatrix) {
                result[i] = this._field._multiply(result[i], xiInverse);
            }
        }
        return result;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.common.reedsolomon.ReedSolomonEncoder

com.google.zxing.common.reedsolomon.ReedSolomonEncoder = function com_google_zxing_common_reedsolomon_ReedSolomonEncoder(field) {
    if (!(com.google.zxing.common.reedsolomon.GF256.qR_CODE_FIELD === field)) {
        throw new Error('Only QR Code is supported at this time');
    }
    this._field = field;
    this._cachedGenerators = new Array(10);
    this._cachedGenerators.add(new com.google.zxing.common.reedsolomon._gF256Poly(field, [ 1 ]));
}
com.google.zxing.common.reedsolomon.ReedSolomonEncoder.prototype = {
    _field: null,
    _cachedGenerators: null,
    
    _buildGenerator: function com_google_zxing_common_reedsolomon_ReedSolomonEncoder$_buildGenerator(degree) {
        if (degree >= this._cachedGenerators.length) {
            var lastGenerator = this._cachedGenerators[this._cachedGenerators.length - 1];
            for (var d = this._cachedGenerators.length; d <= degree; d++) {
                var nextGenerator = lastGenerator._multiply1(new com.google.zxing.common.reedsolomon._gF256Poly(this._field, [ 1, this._field._exp(d - 1) ]));
                this._cachedGenerators.add(nextGenerator);
                lastGenerator = nextGenerator;
            }
        }
        return this._cachedGenerators[degree];
    },
    
    encode: function com_google_zxing_common_reedsolomon_ReedSolomonEncoder$encode(toEncode, ecBytes) {
        if (!ecBytes) {
            throw new Error('No error correction bytes');
        }
        var dataBytes = toEncode.length - ecBytes;
        if (dataBytes <= 0) {
            throw new Error('No data bytes provided');
        }
        var generator = this._buildGenerator(ecBytes);
        var infoCoefficients = new Array(dataBytes);
        SystemExtend.ArrayExtend.copy(toEncode, 0, infoCoefficients, 0, dataBytes);
        var info = new com.google.zxing.common.reedsolomon._gF256Poly(this._field, infoCoefficients);
        info = info._multiplyByMonomial(ecBytes, 1);
        var remainder = info._divide(generator)[1];
        var coefficients = remainder.get__coefficients();
        var numZeroCoefficients = ecBytes - coefficients.length;
        for (var i = 0; i < numZeroCoefficients; i++) {
            toEncode[dataBytes + i] = 0;
        }
        SystemExtend.ArrayExtend.copy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
    }
}


Type.registerNamespace('com.google.zxing.oned');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.oned.OneDReader

com.google.zxing.oned.OneDReader = function com_google_zxing_oned_OneDReader() {
}
com.google.zxing.oned.OneDReader._recordPattern = function com_google_zxing_oned_OneDReader$_recordPattern(row, start, counters) {
    var numCounters = counters.length;
    for (var i = 0; i < numCounters; i++) {
        counters[i] = 0;
    }
    var end = row.get_size();
    if (start >= end) {
        throw new Error('ReaderException');
    }
    var isWhite = !row.get_Renamed(start);
    var counterPosition = 0;
    var i2 = start;
    while (i2 < end) {
        var pixel = row.get_Renamed(i2);
        if ((pixel ^ isWhite) === 1) {
            counters[counterPosition]++;
        }
        else {
            counterPosition++;
            if (counterPosition === numCounters) {
                break;
            }
            else {
                counters[counterPosition] = 1;
                isWhite = (isWhite ^ true) === 1;
            }
        }
        i2++;
    }
    if (!(counterPosition === numCounters || (counterPosition === numCounters - 1 && i2 === end))) {
        throw new Error('ReaderException');
    }
}
com.google.zxing.oned.OneDReader._patternMatchVariance = function com_google_zxing_oned_OneDReader$_patternMatchVariance(counters, pattern, maxIndividualVariance) {
    var numCounters = counters.length;
    var total = 0;
    var patternLength = 0;
    for (var i = 0; i < numCounters; i++) {
        total += counters[i];
        patternLength += pattern[i];
    }
    if (total < patternLength) {
        return SystemExtend.Int32Extend.maxValue;
    }
    var unitBarWidth = Math.floor((total << 8) / patternLength);
    maxIndividualVariance = (maxIndividualVariance * unitBarWidth) >> 8;
    var totalVariance = 0;
    for (var x = 0; x < numCounters; x++) {
        var counter = counters[x] << 8;
        var scaledPattern = pattern[x] * unitBarWidth;
        var variance = (counter > scaledPattern) ? counter - scaledPattern : scaledPattern - counter;
        if (variance > maxIndividualVariance) {
            return SystemExtend.Int32Extend.maxValue;
        }
        totalVariance += variance;
    }
    return Math.floor(totalVariance / total);
}
com.google.zxing.oned.OneDReader.prototype = {
    
    decode1: function com_google_zxing_oned_OneDReader$decode1(image) {
        return this.decode2(image, null);
    },
    
    decode2: function com_google_zxing_oned_OneDReader$decode2(image, hints) {
        try {
            return this._doDecode(image, hints);
        }
        catch (re) {
            if (re.message.indexOf('ReaderException') < 0) {
                throw re;
            }
            var tryHarder = hints != null && Object.keyExists(hints, com.google.zxing.DecodeHintType.trY_HARDER);
            if (tryHarder && image.get_rotateSupported()) {
                var rotatedImage = image.rotateCounterClockwise();
                var result = this._doDecode(rotatedImage, hints);
                var metadata = result.get_resultMetadata();
                var orientation = 270;
                if (metadata != null && Object.keyExists(metadata, com.google.zxing.ResultMetadataType.ORIENTATION)) {
                    orientation = (orientation + (metadata[com.google.zxing.ResultMetadataType.ORIENTATION])) % 360;
                }
                result.putMetadata(com.google.zxing.ResultMetadataType.ORIENTATION, orientation);
                var points = result.get_resultPoints();
                var height = rotatedImage.get_height();
                for (var i = 0; i < points.length; i++) {
                    points[i] = new com.google.zxing.ResultPoint(height - points[i].get_y() - 1, points[i].get_x());
                }
                return result;
            }
            else {
                throw re;
            }
        }
    },
    
    _doDecode: function com_google_zxing_oned_OneDReader$_doDecode(image, hints) {
        var width = image.get_width();
        var height = image.get_height();
        var row = new com.google.zxing.common.BitArray(width);
        var middle = height >> 1;
        var tryHarder = hints != null && Object.keyExists(hints, com.google.zxing.DecodeHintType.trY_HARDER);
        var rowStep = Math.max(1, height >> ((tryHarder) ? 7 : 4));
        var maxLines;
        if (tryHarder) {
            maxLines = height;
        }
        else {
            maxLines = 9;
        }
        for (var x = 0; x < maxLines; x++) {
            var rowStepsAboveOrBelow = (x + 1) >> 1;
            var isAbove = !(x & 1);
            var rowNumber = middle + rowStep * ((isAbove) ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
            if (rowNumber < 0 || rowNumber >= height) {
                break;
            }
            try {
                row = image.getBlackRow(rowNumber, row);
            }
            catch (e) {
                if (e.message.indexOf('ReaderException') < 0) {
                    throw e;
                }
                continue;
            }
            for (var attempt = 0; attempt < 2; attempt++) {
                if (attempt === 1) {
                    row.reverse();
                    if (hints != null && Object.keyExists(hints, com.google.zxing.DecodeHintType.neeD_RESULT_POINT_CALLBACK)) {
                        var newHints = {};
                        var hintEnum = Object.keys(hints).getEnumerator();
                        while (hintEnum.moveNext()) {
                            var key = hintEnum.current;
                            if (!(key === com.google.zxing.DecodeHintType.neeD_RESULT_POINT_CALLBACK)) {
                                newHints[key] = hints[key];
                            }
                        }
                        hints = newHints;
                    }
                }
                try {
                    var result = this.decodeRow2(rowNumber, row, hints);
                    if (attempt === 1) {
                        result.putMetadata(com.google.zxing.ResultMetadataType.ORIENTATION, 180);
                        var points = result.get_resultPoints();
                        points[0] = new com.google.zxing.ResultPoint(width - points[0].get_x() - 1, points[0].get_y());
                        points[1] = new com.google.zxing.ResultPoint(width - points[1].get_x() - 1, points[1].get_y());
                    }
                    return result;
                }
                catch (e) {
                    if (e.message.indexOf('ReaderException') < 0) {
                        throw e;
                    }
                }
            }
        }
        throw new Error('ReaderException');
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.oned.UPCEANReader

com.google.zxing.oned.UPCEANReader = function com_google_zxing_oned_UPCEANReader() {
    com.google.zxing.oned.UPCEANReader.initializeBase(this);
    this._decodeRowStringBuffer$1 = new ss.StringBuilder();
}
com.google.zxing.oned.UPCEANReader._findStartGuardPattern = function com_google_zxing_oned_UPCEANReader$_findStartGuardPattern(row) {
    var foundStart = false;
    var startRange = null;
    var nextStart = 0;
    while (!foundStart) {
        startRange = com.google.zxing.oned.UPCEANReader._findGuardPattern(row, nextStart, false, com.google.zxing.oned.UPCEANReader._starT_END_PATTERN);
        var start = startRange[0];
        nextStart = startRange[1];
        var quietStart = start - (nextStart - start);
        if (quietStart >= 0) {
            foundStart = row.isRange(quietStart, start, false);
        }
    }
    return startRange;
}
com.google.zxing.oned.UPCEANReader._checkStandardUPCEANChecksum$1 = function com_google_zxing_oned_UPCEANReader$_checkStandardUPCEANChecksum$1(s) {
    var length = s.length;
    if (!length) {
        return false;
    }
    var sum = 0;
    for (var i = length - 2; i >= 0; i -= 2) {
        var digit = s.charCodeAt(i) - SystemExtend.CharExtend.toInt32('0');
        if (digit < 0 || digit > 9) {
            throw new Error('ReaderException');
        }
        sum += digit;
    }
    sum *= 3;
    for (var i = length - 1; i >= 0; i -= 2) {
        var digit = s.charCodeAt(i) - SystemExtend.CharExtend.toInt32('0');
        if (digit < 0 || digit > 9) {
            throw new Error('ReaderException');
        }
        sum += digit;
    }
    return !(sum % 10);
}
com.google.zxing.oned.UPCEANReader._findGuardPattern = function com_google_zxing_oned_UPCEANReader$_findGuardPattern(row, rowOffset, whiteFirst, pattern) {
    var patternLength = pattern.length;
    var counters = new Array(patternLength);
    var width = row.get_size();
    var isWhite = false;
    while (rowOffset < width) {
        isWhite = !row.get_Renamed(rowOffset);
        if (whiteFirst === isWhite) {
            break;
        }
        rowOffset++;
    }
    var counterPosition = 0;
    var patternStart = rowOffset;
    for (var x = rowOffset; x < width; x++) {
        var pixel = row.get_Renamed(x);
        if ((pixel ^ isWhite) === 1) {
            counters[counterPosition]++;
        }
        else {
            if (counterPosition === patternLength - 1) {
                if (com.google.zxing.oned.OneDReader._patternMatchVariance(counters, pattern, com.google.zxing.oned.UPCEANReader._maX_INDIVIDUAL_VARIANCE$1) < com.google.zxing.oned.UPCEANReader._maX_AVG_VARIANCE$1) {
                    return [ patternStart, x ];
                }
                patternStart += counters[0] + counters[1];
                for (var y = 2; y < patternLength; y++) {
                    counters[y - 2] = counters[y];
                }
                counters[patternLength - 2] = 0;
                counters[patternLength - 1] = 0;
                counterPosition--;
            }
            else {
                counterPosition++;
            }
            counters[counterPosition] = 1;
            isWhite = !isWhite;
        }
    }
    throw new Error('ReaderException');
}
com.google.zxing.oned.UPCEANReader._decodeDigit = function com_google_zxing_oned_UPCEANReader$_decodeDigit(row, counters, rowOffset, patterns) {
    com.google.zxing.oned.OneDReader._recordPattern(row, rowOffset, counters);
    var bestVariance = com.google.zxing.oned.UPCEANReader._maX_AVG_VARIANCE$1;
    var bestMatch = -1;
    var max = patterns.length;
    for (var i = 0; i < max; i++) {
        var pattern = patterns[i];
        var variance = com.google.zxing.oned.OneDReader._patternMatchVariance(counters, pattern, com.google.zxing.oned.UPCEANReader._maX_INDIVIDUAL_VARIANCE$1);
        if (variance < bestVariance) {
            bestVariance = variance;
            bestMatch = i;
        }
    }
    if (bestMatch >= 0) {
        return bestMatch;
    }
    else {
        throw new Error('ReaderException');
    }
}
com.google.zxing.oned.UPCEANReader.prototype = {
    _decodeRowStringBuffer$1: null,
    
    decodeRow2: function com_google_zxing_oned_UPCEANReader$decodeRow2(rowNumber, row, hints) {
        return this.decodeRow1(rowNumber, row, com.google.zxing.oned.UPCEANReader._findStartGuardPattern(row), hints);
    },
    
    decodeRow1: function com_google_zxing_oned_UPCEANReader$decodeRow1(rowNumber, row, startGuardRange, hints) {
        var resultPointCallback = (hints == null) ? null : hints[com.google.zxing.DecodeHintType.neeD_RESULT_POINT_CALLBACK];
        if (resultPointCallback != null) {
            resultPointCallback.foundPossibleResultPoint(new com.google.zxing.ResultPoint((startGuardRange[0] + startGuardRange[1]) / 2, rowNumber));
        }
        var result = this._decodeRowStringBuffer$1;
        result.clear();
        var endStart = this.decodeMiddle(row, startGuardRange, result);
        if (resultPointCallback != null) {
            resultPointCallback.foundPossibleResultPoint(new com.google.zxing.ResultPoint(endStart, rowNumber));
        }
        var endRange = this.decodeEnd(row, endStart);
        if (resultPointCallback != null) {
            resultPointCallback.foundPossibleResultPoint(new com.google.zxing.ResultPoint((endRange[0] + endRange[1]) / 2, rowNumber));
        }
        var end = endRange[1];
        var quietEnd = end + (end - endRange[0]);
        if (quietEnd >= row.get_size() || !row.isRange(end, quietEnd, false)) {
            throw new Error('ReaderException');
        }
        var resultString = result.toString();
        if (!this.checkChecksum(resultString)) {
            throw new Error('ReaderException');
        }
        var left = (startGuardRange[1] + startGuardRange[0]) / 2;
        var right = (endRange[1] + endRange[0]) / 2;
        return new com.google.zxing.Result(resultString, null, [ new com.google.zxing.ResultPoint(left, rowNumber), new com.google.zxing.ResultPoint(right, rowNumber) ], this.get__barcodeFormat());
    },
    
    checkChecksum: function com_google_zxing_oned_UPCEANReader$checkChecksum(s) {
        return com.google.zxing.oned.UPCEANReader._checkStandardUPCEANChecksum$1(s);
    },
    
    decodeEnd: function com_google_zxing_oned_UPCEANReader$decodeEnd(row, endStart) {
        return com.google.zxing.oned.UPCEANReader._findGuardPattern(row, endStart, false, com.google.zxing.oned.UPCEANReader._starT_END_PATTERN);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.oned.UPCEReader

com.google.zxing.oned.UPCEReader = function com_google_zxing_oned_UPCEReader() {
    com.google.zxing.oned.UPCEReader.initializeBase(this);
    this._decodeMiddleCounters$2 = new Array(4);
}
com.google.zxing.oned.UPCEReader._determineNumSysAndCheckDigit$2 = function com_google_zxing_oned_UPCEReader$_determineNumSysAndCheckDigit$2(resultString, lgPatternFound) {
    for (var numSys = 0; numSys <= 1; numSys++) {
        for (var d = 0; d < 10; d++) {
            if (lgPatternFound === com.google.zxing.oned.UPCEReader._numsyS_AND_CHECK_DIGIT_PATTERNS$2[numSys][d]) {
                var s = SystemExtend.Int32Extend.toChar(SystemExtend.CharExtend.toInt32('0') + numSys) + resultString.toString() + SystemExtend.Int32Extend.toChar(SystemExtend.CharExtend.toInt32('0') + d);
                resultString.clear();
                resultString.append(s);
                return;
            }
        }
    }
    throw new Error('ReaderException');
}
com.google.zxing.oned.UPCEReader.convertUPCEtoUPCA = function com_google_zxing_oned_UPCEReader$convertUPCEtoUPCA(upce) {
    var upceChars = new Array(6);
    SupportClass.getCharsFromString(upce, 1, 7, upceChars, 0);
    var result = new ss.StringBuilder();
    result.append(upce.charAt(0));
    var lastChar = upceChars[5];
    switch (lastChar) {
        case '0':
        case '1':
        case '2':
            result.append(upceChars.extract(0, 2).join());
            result.append(lastChar);
            result.append('0000');
            result.append(upceChars.extract(2, 3).join());
            break;
        case '3':
            result.append(upceChars.extract(0, 3).join());
            result.append('00000');
            result.append(upceChars.extract(3, 2).join());
            break;
        case '4':
            result.append(upceChars.extract(0, 4).join());
            result.append('00000');
            result.append(upceChars[4]);
            break;
        default:
            result.append(upceChars.extract(0, 5).join());
            result.append('0000');
            result.append(lastChar);
            break;
    }
    result.append(upce.charAt(7));
    return result.toString();
}
com.google.zxing.oned.UPCEReader.prototype = {
    
    get__barcodeFormat: function com_google_zxing_oned_UPCEReader$get__barcodeFormat() {
        return com.google.zxing.BarcodeFormat.upC_E;
    },
    
    _decodeMiddleCounters$2: null,
    
    decodeMiddle: function com_google_zxing_oned_UPCEReader$decodeMiddle(row, startRange, result) {
        var counters = this._decodeMiddleCounters$2;
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var end = row.get_size();
        var rowOffset = startRange[1];
        var lgPatternFound = 0;
        for (var x = 0; x < 6 && rowOffset < end; x++) {
            var bestMatch = com.google.zxing.oned.UPCEANReader._decodeDigit(row, counters, rowOffset, com.google.zxing.oned.UPCEANReader._l_AND_G_PATTERNS);
            result.append(('0' + bestMatch % 10));
            for (var i = 0; i < counters.length; i++) {
                rowOffset += counters[i];
            }
            if (bestMatch >= 10) {
                lgPatternFound |= 1 << (5 - x);
            }
        }
        com.google.zxing.oned.UPCEReader._determineNumSysAndCheckDigit$2(result, lgPatternFound);
        return rowOffset;
    },
    
    decodeEnd: function com_google_zxing_oned_UPCEReader$decodeEnd(row, endStart) {
        return com.google.zxing.oned.UPCEANReader._findGuardPattern(row, endStart, true, com.google.zxing.oned.UPCEReader._middlE_END_PATTERN$2);
    },
    
    checkChecksum: function com_google_zxing_oned_UPCEReader$checkChecksum(s) {
        return com.google.zxing.oned.UPCEReader.callBaseMethod(this, 'checkChecksum', [ com.google.zxing.oned.UPCEReader.convertUPCEtoUPCA(s) ]);
    }
}


Type.registerNamespace('com.google.zxing.qrcode.decoder');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._bitMatrixParser

com.google.zxing.qrcode.decoder._bitMatrixParser = function com_google_zxing_qrcode_decoder__bitMatrixParser(bitMatrix) {
    var dimension = bitMatrix.get_dimension();
    if (dimension < 21 || (dimension & 3) !== 1) {
        throw new Error('ReaderException');
    }
    this._bitMatrix = bitMatrix;
}
com.google.zxing.qrcode.decoder._bitMatrixParser.prototype = {
    _bitMatrix: null,
    _parsedVersion: null,
    _parsedFormatInfo: null,
    
    _readFormatInformation: function com_google_zxing_qrcode_decoder__bitMatrixParser$_readFormatInformation() {
        if (this._parsedFormatInfo != null) {
            return this._parsedFormatInfo;
        }
        var formatInfoBits = 0;
        for (var i = 0; i < 6; i++) {
            formatInfoBits = this._copyBit(i, 8, formatInfoBits);
        }
        formatInfoBits = this._copyBit(7, 8, formatInfoBits);
        formatInfoBits = this._copyBit(8, 8, formatInfoBits);
        formatInfoBits = this._copyBit(8, 7, formatInfoBits);
        for (var j = 5; j >= 0; j--) {
            formatInfoBits = this._copyBit(8, j, formatInfoBits);
        }
        this._parsedFormatInfo = com.google.zxing.qrcode.decoder._formatInformation._decodeFormatInformation(formatInfoBits);
        if (this._parsedFormatInfo != null) {
            return this._parsedFormatInfo;
        }
        var dimension = this._bitMatrix.get_dimension();
        formatInfoBits = 0;
        var iMin = dimension - 8;
        for (var i = dimension - 1; i >= iMin; i--) {
            formatInfoBits = this._copyBit(i, 8, formatInfoBits);
        }
        for (var j = dimension - 7; j < dimension; j++) {
            formatInfoBits = this._copyBit(8, j, formatInfoBits);
        }
        this._parsedFormatInfo = com.google.zxing.qrcode.decoder._formatInformation._decodeFormatInformation(formatInfoBits);
        if (this._parsedFormatInfo != null) {
            return this._parsedFormatInfo;
        }
        throw new Error('ReaderException');
    },
    
    _readVersion: function com_google_zxing_qrcode_decoder__bitMatrixParser$_readVersion() {
        if (this._parsedVersion != null) {
            return this._parsedVersion;
        }
        var dimension = this._bitMatrix.get_dimension();
        var provisionalVersion = (dimension - 17) >> 2;
        if (provisionalVersion <= 6) {
            return com.google.zxing.qrcode.decoder.Version.getVersionForNumber(provisionalVersion);
        }
        var versionBits = 0;
        var ijMin = dimension - 11;
        for (var j = 5; j >= 0; j--) {
            for (var i = dimension - 9; i >= ijMin; i--) {
                versionBits = this._copyBit(i, j, versionBits);
            }
        }
        this._parsedVersion = com.google.zxing.qrcode.decoder.Version._decodeVersionInformation(versionBits);
        if (this._parsedVersion != null && this._parsedVersion.get_dimensionForVersion() === dimension) {
            return this._parsedVersion;
        }
        versionBits = 0;
        for (var i = 5; i >= 0; i--) {
            for (var j = dimension - 9; j >= ijMin; j--) {
                versionBits = this._copyBit(i, j, versionBits);
            }
        }
        this._parsedVersion = com.google.zxing.qrcode.decoder.Version._decodeVersionInformation(versionBits);
        if (this._parsedVersion != null && this._parsedVersion.get_dimensionForVersion() === dimension) {
            return this._parsedVersion;
        }
        throw new Error('ReaderException');
    },
    
    _copyBit: function com_google_zxing_qrcode_decoder__bitMatrixParser$_copyBit(i, j, versionBits) {
        return (this._bitMatrix.get_Renamed(i, j)) ? (versionBits << 1) | 1 : versionBits << 1;
    },
    
    _readCodewords: function com_google_zxing_qrcode_decoder__bitMatrixParser$_readCodewords() {
        var formatInfo = this._readFormatInformation();
        var version = this._readVersion();
        var dataMask = com.google.zxing.qrcode.decoder._dataMask._forReference(formatInfo.get__dataMask());
        var dimension = this._bitMatrix.get_dimension();
        dataMask._unmaskBitMatrix(this._bitMatrix, dimension);
        var functionPattern = version._buildFunctionPattern();
        var readingUp = true;
        var result = new Array(version.get_totalCodewords());
        var resultOffset = 0;
        var currentByte = 0;
        var bitsRead = 0;
        for (var j = dimension - 1; j > 0; j -= 2) {
            if (j === 6) {
                j--;
            }
            for (var count = 0; count < dimension; count++) {
                var i = (readingUp) ? dimension - 1 - count : count;
                for (var col = 0; col < 2; col++) {
                    if (!functionPattern.get_Renamed(j - col, i)) {
                        bitsRead++;
                        currentByte <<= 1;
                        if (this._bitMatrix.get_Renamed(j - col, i)) {
                            currentByte |= 1;
                        }
                        if (bitsRead === 8) {
                            result[resultOffset++] = currentByte;
                            bitsRead = 0;
                            currentByte = 0;
                        }
                    }
                }
            }
            readingUp = (readingUp ^ true) === 1;
        }
        if (resultOffset !== version.get_totalCodewords()) {
            throw new Error('ReaderException');
        }
        return result;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataBlock

com.google.zxing.qrcode.decoder._dataBlock = function com_google_zxing_qrcode_decoder__dataBlock(numDataCodewords, codewords) {
    this._numDataCodewords = numDataCodewords;
    this._codewords = codewords;
}
com.google.zxing.qrcode.decoder._dataBlock._getDataBlocks = function com_google_zxing_qrcode_decoder__dataBlock$_getDataBlocks(rawCodewords, version, ecLevel) {
    if (rawCodewords.length !== version.get_totalCodewords()) {
        throw new Error('ArgumentException');
    }
    var ecBlocks = version.getECBlocksForLevel(ecLevel);
    var totalBlocks = 0;
    var ecBlockArray = ecBlocks._getECBlocks();
    for (var i = 0; i < ecBlockArray.length; i++) {
        totalBlocks += ecBlockArray[i].get_count();
    }
    var result = new Array(totalBlocks);
    var numResultBlocks = 0;
    for (var j = 0; j < ecBlockArray.length; j++) {
        var ecBlock = ecBlockArray[j];
        for (var i = 0; i < ecBlock.get_count(); i++) {
            var numDataCodewords = ecBlock.get_dataCodewords();
            var numBlockCodewords = ecBlocks.get_ecCodewordsPerBlock() + numDataCodewords;
            result[numResultBlocks++] = new com.google.zxing.qrcode.decoder._dataBlock(numDataCodewords, new Array(numBlockCodewords));
        }
    }
    var shorterBlocksTotalCodewords = result[0]._codewords.length;
    var longerBlocksStartAt = result.length - 1;
    while (longerBlocksStartAt >= 0) {
        var numCodewords = result[longerBlocksStartAt]._codewords.length;
        if (numCodewords === shorterBlocksTotalCodewords) {
            break;
        }
        longerBlocksStartAt--;
    }
    longerBlocksStartAt++;
    var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.get_ecCodewordsPerBlock();
    var rawCodewordsOffset = 0;
    for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
            result[j]._codewords[i] = rawCodewords[rawCodewordsOffset++];
        }
    }
    for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
        result[j]._codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
    }
    var max = result[0]._codewords.length;
    for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
            var iOffset = (j < longerBlocksStartAt) ? i : i + 1;
            result[j]._codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
        }
    }
    return result;
}
com.google.zxing.qrcode.decoder._dataBlock.prototype = {
    
    get__numDataCodewords: function com_google_zxing_qrcode_decoder__dataBlock$get__numDataCodewords() {
        return this._numDataCodewords;
    },
    
    get__codewords: function com_google_zxing_qrcode_decoder__dataBlock$get__codewords() {
        return this._codewords;
    },
    
    _numDataCodewords: 0,
    _codewords: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask

com.google.zxing.qrcode.decoder._dataMask = function com_google_zxing_qrcode_decoder__dataMask() {
}
com.google.zxing.qrcode.decoder._dataMask._forReference = function com_google_zxing_qrcode_decoder__dataMask$_forReference(reference) {
    if (reference < 0 || reference > 7) {
        throw new Error('ArgumentException');
    }
    return com.google.zxing.qrcode.decoder._dataMask._datA_MASKS[reference];
}
com.google.zxing.qrcode.decoder._dataMask.prototype = {
    
    _unmaskBitMatrix: function com_google_zxing_qrcode_decoder__dataMask$_unmaskBitMatrix(bits, dimension) {
        for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
                if (this._isMasked(i, j)) {
                    bits.flip(j, i);
                }
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask000

com.google.zxing.qrcode.decoder._dataMask000 = function com_google_zxing_qrcode_decoder__dataMask000() {
    com.google.zxing.qrcode.decoder._dataMask000.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask000.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask000$_isMasked(i, j) {
        return !((i + j) & 1);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask001

com.google.zxing.qrcode.decoder._dataMask001 = function com_google_zxing_qrcode_decoder__dataMask001() {
    com.google.zxing.qrcode.decoder._dataMask001.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask001.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask001$_isMasked(i, j) {
        return !(i & 1);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask010

com.google.zxing.qrcode.decoder._dataMask010 = function com_google_zxing_qrcode_decoder__dataMask010() {
    com.google.zxing.qrcode.decoder._dataMask010.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask010.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask010$_isMasked(i, j) {
        return !(j % 3);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask011

com.google.zxing.qrcode.decoder._dataMask011 = function com_google_zxing_qrcode_decoder__dataMask011() {
    com.google.zxing.qrcode.decoder._dataMask011.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask011.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask011$_isMasked(i, j) {
        return !((i + j) % 3);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask100

com.google.zxing.qrcode.decoder._dataMask100 = function com_google_zxing_qrcode_decoder__dataMask100() {
    com.google.zxing.qrcode.decoder._dataMask100.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask100.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask100$_isMasked(i, j) {
        return !((SupportClass.urShift1(i, 1) + Math.floor(j / 3)) & 1);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask101

com.google.zxing.qrcode.decoder._dataMask101 = function com_google_zxing_qrcode_decoder__dataMask101() {
    com.google.zxing.qrcode.decoder._dataMask101.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask101.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask101$_isMasked(i, j) {
        var temp = i * j;
        return !((temp & 1) + (temp % 3));
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask110

com.google.zxing.qrcode.decoder._dataMask110 = function com_google_zxing_qrcode_decoder__dataMask110() {
    com.google.zxing.qrcode.decoder._dataMask110.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask110.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask110$_isMasked(i, j) {
        var temp = i * j;
        return !(((temp & 1) + (temp % 3)) & 1);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._dataMask111

com.google.zxing.qrcode.decoder._dataMask111 = function com_google_zxing_qrcode_decoder__dataMask111() {
    com.google.zxing.qrcode.decoder._dataMask111.initializeBase(this);
}
com.google.zxing.qrcode.decoder._dataMask111.prototype = {
    
    _isMasked: function com_google_zxing_qrcode_decoder__dataMask111$_isMasked(i, j) {
        return !((((i + j) & 1) + ((i * j) % 3)) & 1);
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._decodedBitStreamParser

com.google.zxing.qrcode.decoder._decodedBitStreamParser = function com_google_zxing_qrcode_decoder__decodedBitStreamParser() {
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._decode = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_decode(bytes, version, ecLevel) {
    var bits = new com.google.zxing.common.BitSource(bytes);
    var result = new ss.StringBuilder();
    var currentCharacterSetECI = null;
    var fc1InEffect = false;
    var byteSegments = new Array(1);
    var mode;
    do {
        if (bits.available() < 4) {
            mode = com.google.zxing.qrcode.decoder.Mode.TERMINATOR;
        }
        else {
            try {
                mode = com.google.zxing.qrcode.decoder.Mode.forBits(bits.readBits(4));
            }
            catch (e) {
                if (e.message.indexOf('ArgumentException') < 0) {
                    throw e;
                }
                throw new Error('ReaderException');
            }
        }
        if (!mode.equals(com.google.zxing.qrcode.decoder.Mode.TERMINATOR)) {
            if (mode.equals(com.google.zxing.qrcode.decoder.Mode.fnC1_FIRST_POSITION) || mode.equals(com.google.zxing.qrcode.decoder.Mode.fnC1_SECOND_POSITION)) {
                fc1InEffect = true;
            }
            else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.structureD_APPEND)) {
                bits.readBits(16);
            }
            else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.ECI)) {
                var value_Renamed = com.google.zxing.qrcode.decoder._decodedBitStreamParser._parseECIValue(bits);
                currentCharacterSetECI = com.google.zxing.common.CharacterSetECI.getCharacterSetECIByValue(value_Renamed);
                if (currentCharacterSetECI == null) {
                    throw new Error('ReaderException');
                }
            }
            else {
                var count = bits.readBits(mode.getCharacterCountBits(version));
                if (mode.equals(com.google.zxing.qrcode.decoder.Mode.NUMERIC)) {
                    com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeNumericSegment(bits, result, count);
                }
                else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.ALPHANUMERIC)) {
                    com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                }
                else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.BYTE)) {
                    com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments);
                }
                else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.KANJI)) {
                    com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeKanjiSegment(bits, result, count);
                }
                else {
                    throw new Error('ReaderException');
                }
            }
        }
    } while (!mode.equals(com.google.zxing.qrcode.decoder.Mode.TERMINATOR));
    return new com.google.zxing.common.DecoderResult(bytes, result.toString(), (!byteSegments.length) ? null : byteSegments, ecLevel);
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeKanjiSegment = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_decodeKanjiSegment(bits, result, count) {
    var buffer = new Array(2 * count);
    var offset = 0;
    while (count > 0) {
        var twoBytes = bits.readBits(13);
        var assembledTwoBytes = (Math.floor(twoBytes / 192) << 8) | (twoBytes % 192);
        if (assembledTwoBytes < 7936) {
            assembledTwoBytes += 33088;
        }
        else {
            assembledTwoBytes += 49472;
        }
        buffer[offset] = (assembledTwoBytes >> 8);
        buffer[offset + 1] = assembledTwoBytes;
        offset += 2;
        count--;
    }
    try {
        result.append(SystemExtend.Text.Encoding.getEncoding('SJIS').getString(SupportClass.toByteArray1(buffer)));
    }
    catch ($e1) {
        throw new Error('ReaderException');
    }
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeByteSegment = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments) {
    var readBytes = new Array(count);
    if (count << 3 > bits.available()) {
        throw new Error('ReaderException');
    }
    for (var i = 0; i < count; i++) {
        readBytes[i] = bits.readBits(8);
    }
    var encoding;
    if (currentCharacterSetECI == null) {
        encoding = com.google.zxing.qrcode.decoder._decodedBitStreamParser._guessEncoding(readBytes);
    }
    else {
        encoding = currentCharacterSetECI.get_encodingName();
    }
    try {
        result.append(SystemExtend.Text.Encoding.getEncoding(encoding).getString(SupportClass.toByteArray1(readBytes)));
    }
    catch ($e1) {
        throw new Error('ReaderException');
    }
    byteSegments.add(SupportClass.toByteArray1(readBytes));
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeAlphanumericSegment = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_decodeAlphanumericSegment(bits, result, count, fc1InEffect) {
    var start = result.toString().length;
    while (count > 1) {
        var nextTwoCharsBits = bits.readBits(11);
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[Math.floor(nextTwoCharsBits / 45)]);
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[nextTwoCharsBits % 45]);
        count -= 2;
    }
    if (count === 1) {
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[bits.readBits(6)]);
    }
    var c = new Array(result.toString().length);
    SupportClass.getCharsFromString(result.toString(), 0, result.toString().length, c, 0);
    var list = [c];
    if (fc1InEffect) {
        for (var i = start; i < list.length; i++) {
            if (list[i] === '%') {
                if (i < list.length - 1 && list[i + 1] === '%') {
                    list = list.removeRange(i + 1, 1);
                }
                else {
                    list[i] = SystemExtend.Int32Extend.toChar(29);
                }
            }
        }
        result.clear();
        result.append(list.join());
    }
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._decodeNumericSegment = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_decodeNumericSegment(bits, result, count) {
    while (count >= 3) {
        var threeDigitsBits = bits.readBits(10);
        if (threeDigitsBits >= 1000) {
            throw new Error('ReaderException');
        }
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[Math.floor(threeDigitsBits / 100)]);
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[Math.floor(threeDigitsBits / 10) % 10]);
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[threeDigitsBits % 10]);
        count -= 3;
    }
    if (count === 2) {
        var twoDigitsBits = bits.readBits(7);
        if (twoDigitsBits >= 100) {
            throw new Error('ReaderException');
        }
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[Math.floor(twoDigitsBits / 10)]);
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[twoDigitsBits % 10]);
    }
    else if (count === 1) {
        var digitBits = bits.readBits(4);
        if (digitBits >= 10) {
            throw new Error('ReaderException');
        }
        result.append(com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS[digitBits]);
    }
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._guessEncoding = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_guessEncoding(bytes) {
    if (com.google.zxing.qrcode.decoder._decodedBitStreamParser._assumE_SHIFT_JIS) {
        return 'SJIS';
    }
    if (bytes.length > 3 && bytes[0] === SupportClass.identity1(239) && bytes[1] === SupportClass.identity1(187) && bytes[2] === SupportClass.identity1(191)) {
        return 'UTF-8';
    }
    var length = bytes.length;
    var canBeISO88591 = true;
    var canBeShiftJIS = true;
    var maybeDoubleByteCount = 0;
    var maybeSingleByteKatakanaCount = 0;
    var sawLatin1Supplement = false;
    var lastWasPossibleDoubleByteStart = false;
    for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS); i++) {
        var value_Renamed = bytes[i] & 255;
        if ((value_Renamed === 194 || value_Renamed === 195) && i < length - 1) {
            var nextValue = bytes[i + 1] & 255;
            if (nextValue <= 191 && ((value_Renamed === 194 && nextValue >= 160) || (value_Renamed === 195 && nextValue >= 128))) {
                sawLatin1Supplement = true;
            }
        }
        if (value_Renamed >= 127 && value_Renamed <= 159) {
            canBeISO88591 = false;
        }
        if (value_Renamed >= 161 && value_Renamed <= 223) {
            if (!lastWasPossibleDoubleByteStart) {
                maybeSingleByteKatakanaCount++;
            }
        }
        if (!lastWasPossibleDoubleByteStart && ((value_Renamed >= 240 && value_Renamed <= 255) || value_Renamed === 128 || value_Renamed === 160)) {
            canBeShiftJIS = false;
        }
        if (((value_Renamed >= 129 && value_Renamed <= 159) || (value_Renamed >= 224 && value_Renamed <= 239))) {
            if (lastWasPossibleDoubleByteStart) {
                lastWasPossibleDoubleByteStart = false;
            }
            else {
                lastWasPossibleDoubleByteStart = true;
                if (i >= bytes.length - 1) {
                    canBeShiftJIS = false;
                }
                else {
                    var nextValue = bytes[i + 1] & 255;
                    if (nextValue < 64 || nextValue > 252) {
                        canBeShiftJIS = false;
                    }
                    else {
                        maybeDoubleByteCount++;
                    }
                }
            }
        }
        else {
            lastWasPossibleDoubleByteStart = false;
        }
    }
    if (canBeShiftJIS && (maybeDoubleByteCount >= 3 || 20 * maybeSingleByteKatakanaCount > length)) {
        return 'SJIS';
    }
    if (!sawLatin1Supplement && canBeISO88591) {
        return 'ISO-8859-1';
    }
    return 'UTF-8';
}
com.google.zxing.qrcode.decoder._decodedBitStreamParser._parseECIValue = function com_google_zxing_qrcode_decoder__decodedBitStreamParser$_parseECIValue(bits) {
    var firstByte = bits.readBits(8);
    if (!(firstByte & 128)) {
        return firstByte & 127;
    }
    else if ((firstByte & 192) === 128) {
        var secondByte = bits.readBits(8);
        return ((firstByte & 63) << 8) | secondByte;
    }
    else if ((firstByte & 224) === 192) {
        var secondThirdBytes = bits.readBits(16);
        return ((firstByte & 31) << 16) | secondThirdBytes;
    }
    throw new Error('ArgumentException: Bad ECI bits starting with byte ' + firstByte);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.Decoder

com.google.zxing.qrcode.decoder.Decoder = function com_google_zxing_qrcode_decoder_Decoder() {
    this._rsDecoder = new com.google.zxing.common.reedsolomon.ReedSolomonDecoder(com.google.zxing.common.reedsolomon.GF256.qR_CODE_FIELD);
}
com.google.zxing.qrcode.decoder.Decoder.prototype = {
    _rsDecoder: null,
    
    decode1: function com_google_zxing_qrcode_decoder_Decoder$decode1(image) {
        var dimension = image.length;
        var bits = com.google.zxing.common.BitMatrix.createSquareInstance(dimension);
        for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
                if (image[i][j]) {
                    bits.set_Renamed(j, i);
                }
            }
        }
        return this.decode2(bits);
    },
    
    decode2: function com_google_zxing_qrcode_decoder_Decoder$decode2(bits) {
        var parser = new com.google.zxing.qrcode.decoder._bitMatrixParser(bits);
        var version = parser._readVersion();
        var ecLevel = parser._readFormatInformation().get__errorCorrectionLevel();
        var codewords = parser._readCodewords();
        var dataBlocks = com.google.zxing.qrcode.decoder._dataBlock._getDataBlocks(codewords, version, ecLevel);
        var totalBytes = 0;
        for (var i = 0; i < dataBlocks.length; i++) {
            totalBytes += dataBlocks[i].get__numDataCodewords();
        }
        var resultBytes = new Array(totalBytes);
        var resultOffset = 0;
        for (var j = 0; j < dataBlocks.length; j++) {
            var dataBlock = dataBlocks[j];
            var codewordBytes = dataBlock.get__codewords();
            var numDataCodewords = dataBlock.get__numDataCodewords();
            this._correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
                resultBytes[resultOffset++] = codewordBytes[i];
            }
        }
        return com.google.zxing.qrcode.decoder._decodedBitStreamParser._decode(resultBytes, version, ecLevel);
    },
    
    _correctErrors: function com_google_zxing_qrcode_decoder_Decoder$_correctErrors(codewordBytes, numDataCodewords) {
        var numCodewords = codewordBytes.length;
        var codewordsInts = new Array(numCodewords);
        for (var i = 0; i < numCodewords; i++) {
            codewordsInts[i] = codewordBytes[i] & 255;
        }
        var numECCodewords = codewordBytes.length - numDataCodewords;
        try {
            this._rsDecoder.decode(codewordsInts, numECCodewords);
        }
        catch (e) {
            if (e.message.indexOf('ReedSolomonException') < 0) {
                throw e;
            }
            throw new Error('ReaderException');
        }
        for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = codewordsInts[i];
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.ErrorCorrectionLevel

com.google.zxing.qrcode.decoder.ErrorCorrectionLevel = function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel(ordinal, bits, name) {
    this._ordinal_Renamed_Field = ordinal;
    this._bits = bits;
    this._name = name;
}
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.forBits = function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel$forBits(bits) {
    if (bits < 0 || bits >= com.google.zxing.qrcode.decoder.ErrorCorrectionLevel._foR_BITS.length) {
        throw new Error('ArgumentException');
    }
    return com.google.zxing.qrcode.decoder.ErrorCorrectionLevel._foR_BITS[bits];
}
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.prototype = {
    
    get_bits: function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel$get_bits() {
        return this._bits;
    },
    
    get_name: function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel$get_name() {
        return this._name;
    },
    
    _ordinal_Renamed_Field: 0,
    _bits: 0,
    _name: null,
    
    ordinal: function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel$ordinal() {
        return this._ordinal_Renamed_Field;
    },
    
    toString: function com_google_zxing_qrcode_decoder_ErrorCorrectionLevel$toString() {
        return this._name;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder._formatInformation

com.google.zxing.qrcode.decoder._formatInformation = function com_google_zxing_qrcode_decoder__formatInformation(formatInfo) {
    this._errorCorrectionLevel = com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.forBits((formatInfo >> 3) & 3);
    this._dataMask = (formatInfo & 7);
}
com.google.zxing.qrcode.decoder._formatInformation._numBitsDiffering = function com_google_zxing_qrcode_decoder__formatInformation$_numBitsDiffering(a, b) {
    a ^= b;
    return com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[a & 15] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 4) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 8) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 12) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 16) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 20) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 24) & 15)] + com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE[(SupportClass.urShift1(a, 28) & 15)];
}
com.google.zxing.qrcode.decoder._formatInformation._decodeFormatInformation = function com_google_zxing_qrcode_decoder__formatInformation$_decodeFormatInformation(maskedFormatInfo) {
    var formatInfo = com.google.zxing.qrcode.decoder._formatInformation._doDecodeFormatInformation(maskedFormatInfo);
    if (formatInfo != null) {
        return formatInfo;
    }
    return com.google.zxing.qrcode.decoder._formatInformation._doDecodeFormatInformation(maskedFormatInfo ^ 21522);
}
com.google.zxing.qrcode.decoder._formatInformation._doDecodeFormatInformation = function com_google_zxing_qrcode_decoder__formatInformation$_doDecodeFormatInformation(maskedFormatInfo) {
    var bestDifference = SystemExtend.Int32Extend.maxValue;
    var bestFormatInfo = 0;
    for (var i = 0; i < com.google.zxing.qrcode.decoder._formatInformation._formaT_INFO_DECODE_LOOKUP.length; i++) {
        var decodeInfo = com.google.zxing.qrcode.decoder._formatInformation._formaT_INFO_DECODE_LOOKUP[i];
        var targetInfo = decodeInfo[0];
        if (targetInfo === maskedFormatInfo) {
            return new com.google.zxing.qrcode.decoder._formatInformation(decodeInfo[1]);
        }
        var bitsDifference = com.google.zxing.qrcode.decoder._formatInformation._numBitsDiffering(maskedFormatInfo, targetInfo);
        if (bitsDifference < bestDifference) {
            bestFormatInfo = decodeInfo[1];
            bestDifference = bitsDifference;
        }
    }
    if (bestDifference <= 3) {
        return new com.google.zxing.qrcode.decoder._formatInformation(bestFormatInfo);
    }
    return null;
}
com.google.zxing.qrcode.decoder._formatInformation.prototype = {
    
    get__errorCorrectionLevel: function com_google_zxing_qrcode_decoder__formatInformation$get__errorCorrectionLevel() {
        return this._errorCorrectionLevel;
    },
    
    get__dataMask: function com_google_zxing_qrcode_decoder__formatInformation$get__dataMask() {
        return this._dataMask;
    },
    
    _errorCorrectionLevel: null,
    _dataMask: 0,
    
    getHashCode: function com_google_zxing_qrcode_decoder__formatInformation$getHashCode() {
        return (this._errorCorrectionLevel.ordinal() << 3) | this._dataMask;
    },
    
    equals: function com_google_zxing_qrcode_decoder__formatInformation$equals(o) {
        if (!(Type.canCast(o, com.google.zxing.qrcode.decoder._formatInformation))) {
            return false;
        }
        var other = o;
        return this._errorCorrectionLevel === other._errorCorrectionLevel && this._dataMask === other._dataMask;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.Mode

com.google.zxing.qrcode.decoder.Mode = function com_google_zxing_qrcode_decoder_Mode(characterCountBitsForVersions, bits, name) {
    this._characterCountBitsForVersions = characterCountBitsForVersions;
    this._bits = bits;
    this._name = name;
}
com.google.zxing.qrcode.decoder.Mode.forBits = function com_google_zxing_qrcode_decoder_Mode$forBits(bits) {
    switch (bits) {
        case 0:
            return com.google.zxing.qrcode.decoder.Mode.TERMINATOR;
        case 1:
            return com.google.zxing.qrcode.decoder.Mode.NUMERIC;
        case 2:
            return com.google.zxing.qrcode.decoder.Mode.ALPHANUMERIC;
        case 3:
            return com.google.zxing.qrcode.decoder.Mode.structureD_APPEND;
        case 4:
            return com.google.zxing.qrcode.decoder.Mode.BYTE;
        case 5:
            return com.google.zxing.qrcode.decoder.Mode.fnC1_FIRST_POSITION;
        case 7:
            return com.google.zxing.qrcode.decoder.Mode.ECI;
        case 8:
            return com.google.zxing.qrcode.decoder.Mode.KANJI;
        case 9:
            return com.google.zxing.qrcode.decoder.Mode.fnC1_SECOND_POSITION;
        default:
            throw new Error('ArgumentException');
    }
}
com.google.zxing.qrcode.decoder.Mode.prototype = {
    
    get_bits: function com_google_zxing_qrcode_decoder_Mode$get_bits() {
        return this._bits;
    },
    
    get_name: function com_google_zxing_qrcode_decoder_Mode$get_name() {
        return this._name;
    },
    
    _characterCountBitsForVersions: null,
    _bits: 0,
    _name: null,
    
    getCharacterCountBits: function com_google_zxing_qrcode_decoder_Mode$getCharacterCountBits(version) {
        if (this._characterCountBitsForVersions == null) {
            throw new Error("ArgumentException: Character count doesn't apply to this mode");
        }
        var number = version.get_versionNumber();
        var offset;
        if (number <= 9) {
            offset = 0;
        }
        else if (number <= 26) {
            offset = 1;
        }
        else {
            offset = 2;
        }
        return this._characterCountBitsForVersions[offset];
    },
    
    toString: function com_google_zxing_qrcode_decoder_Mode$toString() {
        return this._name;
    },
    
    equals: function com_google_zxing_qrcode_decoder_Mode$equals(obj) {
        return this === obj;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.Version

com.google.zxing.qrcode.decoder.Version = function com_google_zxing_qrcode_decoder_Version(versionNumber, alignmentPatternCenters, ecBlocks1, ecBlocks2, ecBlocks3, ecBlocks4) {
    this._versionNumber = versionNumber;
    this._alignmentPatternCenters = alignmentPatternCenters;
    this._ecBlocks = [ ecBlocks1, ecBlocks2, ecBlocks3, ecBlocks4 ];
    var total = 0;
    var ecCodewords = ecBlocks1.get_ecCodewordsPerBlock();
    var ecbArray = ecBlocks1._getECBlocks();
    for (var i = 0; i < ecbArray.length; i++) {
        var ecBlock = ecbArray[i];
        total += ecBlock.get_count() * (ecBlock.get_dataCodewords() + ecCodewords);
    }
    this._totalCodewords = total;
}
com.google.zxing.qrcode.decoder.Version.getProvisionalVersionForDimension = function com_google_zxing_qrcode_decoder_Version$getProvisionalVersionForDimension(dimension) {
    if (dimension % 4 !== 1) {
        throw new Error('ReaderException');
    }
    try {
        return com.google.zxing.qrcode.decoder.Version.getVersionForNumber((dimension - 17) >> 2);
    }
    catch (e) {
        if (e.message.indexOf('ArgumentException') < 0) {
            throw e;
        }
        throw new Error('ReaderException');
    }
}
com.google.zxing.qrcode.decoder.Version.getVersionForNumber = function com_google_zxing_qrcode_decoder_Version$getVersionForNumber(versionNumber) {
    if (versionNumber < 1 || versionNumber > 40) {
        throw new Error('ArgumentException');
    }
    return com.google.zxing.qrcode.decoder.Version._VERSIONS[versionNumber - 1];
}
com.google.zxing.qrcode.decoder.Version._decodeVersionInformation = function com_google_zxing_qrcode_decoder_Version$_decodeVersionInformation(versionBits) {
    var bestDifference = SystemExtend.Int32Extend.maxValue;
    var bestVersion = 0;
    for (var i = 0; i < com.google.zxing.qrcode.decoder.Version._versioN_DECODE_INFO.length; i++) {
        var targetVersion = com.google.zxing.qrcode.decoder.Version._versioN_DECODE_INFO[i];
        if (targetVersion === versionBits) {
            return com.google.zxing.qrcode.decoder.Version.getVersionForNumber(i + 7);
        }
        var bitsDifference = com.google.zxing.qrcode.decoder._formatInformation._numBitsDiffering(versionBits, targetVersion);
        if (bitsDifference < bestDifference) {
            bestVersion = i + 7;
            bestDifference = bitsDifference;
        }
    }
    if (bestDifference <= 3) {
        return com.google.zxing.qrcode.decoder.Version.getVersionForNumber(bestVersion);
    }
    return null;
}
com.google.zxing.qrcode.decoder.Version._buildVersions = function com_google_zxing_qrcode_decoder_Version$_buildVersions() {
    return [ new com.google.zxing.qrcode.decoder.Version(1, [], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(7, new com.google.zxing.qrcode.decoder.ECB(1, 19)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(10, new com.google.zxing.qrcode.decoder.ECB(1, 16)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(13, new com.google.zxing.qrcode.decoder.ECB(1, 13)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(17, new com.google.zxing.qrcode.decoder.ECB(1, 9))), new com.google.zxing.qrcode.decoder.Version(2, [ 6, 18 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(10, new com.google.zxing.qrcode.decoder.ECB(1, 34)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(16, new com.google.zxing.qrcode.decoder.ECB(1, 28)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(22, new com.google.zxing.qrcode.decoder.ECB(1, 22)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(28, new com.google.zxing.qrcode.decoder.ECB(1, 16))), new com.google.zxing.qrcode.decoder.Version(3, [ 6, 22 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(15, new com.google.zxing.qrcode.decoder.ECB(1, 55)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(26, new com.google.zxing.qrcode.decoder.ECB(1, 44)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(18, new com.google.zxing.qrcode.decoder.ECB(2, 17)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(22, new com.google.zxing.qrcode.decoder.ECB(2, 13))), new com.google.zxing.qrcode.decoder.Version(4, [ 6, 26 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(20, new com.google.zxing.qrcode.decoder.ECB(1, 80)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(18, new com.google.zxing.qrcode.decoder.ECB(2, 32)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(26, new com.google.zxing.qrcode.decoder.ECB(2, 24)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(16, new com.google.zxing.qrcode.decoder.ECB(4, 9))), new com.google.zxing.qrcode.decoder.Version(5, [ 6, 30 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(26, new com.google.zxing.qrcode.decoder.ECB(1, 108)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(24, new com.google.zxing.qrcode.decoder.ECB(2, 43)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(18, new com.google.zxing.qrcode.decoder.ECB(2, 15), new com.google.zxing.qrcode.decoder.ECB(2, 16)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(2, 11), new com.google.zxing.qrcode.decoder.ECB(2, 12))), new com.google.zxing.qrcode.decoder.Version(6, [ 6, 34 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(18, new com.google.zxing.qrcode.decoder.ECB(2, 68)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(16, new com.google.zxing.qrcode.decoder.ECB(4, 27)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(24, new com.google.zxing.qrcode.decoder.ECB(4, 19)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(28, new com.google.zxing.qrcode.decoder.ECB(4, 15))), new com.google.zxing.qrcode.decoder.Version(7, [ 6, 22, 38 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(20, new com.google.zxing.qrcode.decoder.ECB(2, 78)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(18, new com.google.zxing.qrcode.decoder.ECB(4, 31)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(18, new com.google.zxing.qrcode.decoder.ECB(2, 14), new com.google.zxing.qrcode.decoder.ECB(4, 15)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(4, 13), new com.google.zxing.qrcode.decoder.ECB(1, 14))), new com.google.zxing.qrcode.decoder.Version(8, [ 6, 24, 42 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(24, new com.google.zxing.qrcode.decoder.ECB(2, 97)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(2, 38), new com.google.zxing.qrcode.decoder.ECB(2, 39)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(4, 18), new com.google.zxing.qrcode.decoder.ECB(2, 19)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(4, 14), new com.google.zxing.qrcode.decoder.ECB(2, 15))), new com.google.zxing.qrcode.decoder.Version(9, [ 6, 26, 46 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(30, new com.google.zxing.qrcode.decoder.ECB(2, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(3, 36), new com.google.zxing.qrcode.decoder.ECB(2, 37)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(20, new com.google.zxing.qrcode.decoder.ECB(4, 16), new com.google.zxing.qrcode.decoder.ECB(4, 17)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(4, 12), new com.google.zxing.qrcode.decoder.ECB(4, 13))), new com.google.zxing.qrcode.decoder.Version(10, [ 6, 28, 50 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(18, new com.google.zxing.qrcode.decoder.ECB(2, 68), new com.google.zxing.qrcode.decoder.ECB(2, 69)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(4, 43), new com.google.zxing.qrcode.decoder.ECB(1, 44)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(6, 19), new com.google.zxing.qrcode.decoder.ECB(2, 20)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(6, 15), new com.google.zxing.qrcode.decoder.ECB(2, 16))), new com.google.zxing.qrcode.decoder.Version(11, [ 6, 30, 54 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(20, new com.google.zxing.qrcode.decoder.ECB(4, 81)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(1, 50), new com.google.zxing.qrcode.decoder.ECB(4, 51)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(4, 22), new com.google.zxing.qrcode.decoder.ECB(4, 23)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(3, 12), new com.google.zxing.qrcode.decoder.ECB(8, 13))), new com.google.zxing.qrcode.decoder.Version(12, [ 6, 32, 58 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(2, 92), new com.google.zxing.qrcode.decoder.ECB(2, 93)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(6, 36), new com.google.zxing.qrcode.decoder.ECB(2, 37)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(4, 20), new com.google.zxing.qrcode.decoder.ECB(6, 21)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(7, 14), new com.google.zxing.qrcode.decoder.ECB(4, 15))), new com.google.zxing.qrcode.decoder.Version(13, [ 6, 34, 62 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(26, new com.google.zxing.qrcode.decoder.ECB(4, 107)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(8, 37), new com.google.zxing.qrcode.decoder.ECB(1, 38)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(8, 20), new com.google.zxing.qrcode.decoder.ECB(4, 21)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(12, 11), new com.google.zxing.qrcode.decoder.ECB(4, 12))), new com.google.zxing.qrcode.decoder.Version(14, [ 6, 26, 46, 66 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(3, 115), new com.google.zxing.qrcode.decoder.ECB(1, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(4, 40), new com.google.zxing.qrcode.decoder.ECB(5, 41)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(20, new com.google.zxing.qrcode.decoder.ECB(11, 16), new com.google.zxing.qrcode.decoder.ECB(5, 17)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(11, 12), new com.google.zxing.qrcode.decoder.ECB(5, 13))), new com.google.zxing.qrcode.decoder.Version(15, [ 6, 26, 48, 70 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(22, new com.google.zxing.qrcode.decoder.ECB(5, 87), new com.google.zxing.qrcode.decoder.ECB(1, 88)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(5, 41), new com.google.zxing.qrcode.decoder.ECB(5, 42)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(5, 24), new com.google.zxing.qrcode.decoder.ECB(7, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(11, 12), new com.google.zxing.qrcode.decoder.ECB(7, 13))), new com.google.zxing.qrcode.decoder.Version(16, [ 6, 26, 50, 74 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(5, 98), new com.google.zxing.qrcode.decoder.ECB(1, 99)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(7, 45), new com.google.zxing.qrcode.decoder.ECB(3, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(24, new com.google.zxing.qrcode.decoder.ECB(15, 19), new com.google.zxing.qrcode.decoder.ECB(2, 20)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(3, 15), new com.google.zxing.qrcode.decoder.ECB(13, 16))), new com.google.zxing.qrcode.decoder.Version(17, [ 6, 30, 54, 78 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(1, 107), new com.google.zxing.qrcode.decoder.ECB(5, 108)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(10, 46), new com.google.zxing.qrcode.decoder.ECB(1, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(1, 22), new com.google.zxing.qrcode.decoder.ECB(15, 23)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(2, 14), new com.google.zxing.qrcode.decoder.ECB(17, 15))), new com.google.zxing.qrcode.decoder.Version(18, [ 6, 30, 56, 82 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(5, 120), new com.google.zxing.qrcode.decoder.ECB(1, 121)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(9, 43), new com.google.zxing.qrcode.decoder.ECB(4, 44)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(17, 22), new com.google.zxing.qrcode.decoder.ECB(1, 23)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(2, 14), new com.google.zxing.qrcode.decoder.ECB(19, 15))), new com.google.zxing.qrcode.decoder.Version(19, [ 6, 30, 58, 86 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(3, 113), new com.google.zxing.qrcode.decoder.ECB(4, 114)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(3, 44), new com.google.zxing.qrcode.decoder.ECB(11, 45)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(17, 21), new com.google.zxing.qrcode.decoder.ECB(4, 22)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(9, 13), new com.google.zxing.qrcode.decoder.ECB(16, 14))), new com.google.zxing.qrcode.decoder.Version(20, [ 6, 34, 62, 90 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(3, 107), new com.google.zxing.qrcode.decoder.ECB(5, 108)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(3, 41), new com.google.zxing.qrcode.decoder.ECB(13, 42)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(15, 24), new com.google.zxing.qrcode.decoder.ECB(5, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(15, 15), new com.google.zxing.qrcode.decoder.ECB(10, 16))), new com.google.zxing.qrcode.decoder.Version(21, [ 6, 28, 50, 72, 94 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(4, 116), new com.google.zxing.qrcode.decoder.ECB(4, 117)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(26, new com.google.zxing.qrcode.decoder.ECB(17, 42)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(17, 22), new com.google.zxing.qrcode.decoder.ECB(6, 23)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(19, 16), new com.google.zxing.qrcode.decoder.ECB(6, 17))), new com.google.zxing.qrcode.decoder.Version(22, [ 6, 26, 50, 74, 98 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(2, 111), new com.google.zxing.qrcode.decoder.ECB(7, 112)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(28, new com.google.zxing.qrcode.decoder.ECB(17, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(7, 24), new com.google.zxing.qrcode.decoder.ECB(16, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(24, new com.google.zxing.qrcode.decoder.ECB(34, 13))), new com.google.zxing.qrcode.decoder.Version(23, [ 6, 30, 54, 74, 102 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(4, 121), new com.google.zxing.qrcode.decoder.ECB(5, 122)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(4, 47), new com.google.zxing.qrcode.decoder.ECB(14, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(11, 24), new com.google.zxing.qrcode.decoder.ECB(14, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(16, 15), new com.google.zxing.qrcode.decoder.ECB(14, 16))), new com.google.zxing.qrcode.decoder.Version(24, [ 6, 28, 54, 80, 106 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(6, 117), new com.google.zxing.qrcode.decoder.ECB(4, 118)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(6, 45), new com.google.zxing.qrcode.decoder.ECB(14, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(11, 24), new com.google.zxing.qrcode.decoder.ECB(16, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(30, 16), new com.google.zxing.qrcode.decoder.ECB(2, 17))), new com.google.zxing.qrcode.decoder.Version(25, [ 6, 32, 58, 84, 110 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(26, new com.google.zxing.qrcode.decoder.ECB(8, 106), new com.google.zxing.qrcode.decoder.ECB(4, 107)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(8, 47), new com.google.zxing.qrcode.decoder.ECB(13, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(7, 24), new com.google.zxing.qrcode.decoder.ECB(22, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(22, 15), new com.google.zxing.qrcode.decoder.ECB(13, 16))), new com.google.zxing.qrcode.decoder.Version(26, [ 6, 30, 58, 86, 114 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(10, 114), new com.google.zxing.qrcode.decoder.ECB(2, 115)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(19, 46), new com.google.zxing.qrcode.decoder.ECB(4, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(28, 22), new com.google.zxing.qrcode.decoder.ECB(6, 23)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(33, 16), new com.google.zxing.qrcode.decoder.ECB(4, 17))), new com.google.zxing.qrcode.decoder.Version(27, [ 6, 34, 62, 90, 118 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(8, 122), new com.google.zxing.qrcode.decoder.ECB(4, 123)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(22, 45), new com.google.zxing.qrcode.decoder.ECB(3, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(8, 23), new com.google.zxing.qrcode.decoder.ECB(26, 24)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(12, 15), new com.google.zxing.qrcode.decoder.ECB(28, 16))), new com.google.zxing.qrcode.decoder.Version(28, [ 6, 26, 50, 74, 98, 122 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(3, 117), new com.google.zxing.qrcode.decoder.ECB(10, 118)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(3, 45), new com.google.zxing.qrcode.decoder.ECB(23, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(4, 24), new com.google.zxing.qrcode.decoder.ECB(31, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(11, 15), new com.google.zxing.qrcode.decoder.ECB(31, 16))), new com.google.zxing.qrcode.decoder.Version(29, [ 6, 30, 54, 78, 102, 126 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(7, 116), new com.google.zxing.qrcode.decoder.ECB(7, 117)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(21, 45), new com.google.zxing.qrcode.decoder.ECB(7, 46)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(1, 23), new com.google.zxing.qrcode.decoder.ECB(37, 24)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(19, 15), new com.google.zxing.qrcode.decoder.ECB(26, 16))), new com.google.zxing.qrcode.decoder.Version(30, [ 6, 26, 52, 78, 104, 130 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(5, 115), new com.google.zxing.qrcode.decoder.ECB(10, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(19, 47), new com.google.zxing.qrcode.decoder.ECB(10, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(15, 24), new com.google.zxing.qrcode.decoder.ECB(25, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(23, 15), new com.google.zxing.qrcode.decoder.ECB(25, 16))), new com.google.zxing.qrcode.decoder.Version(31, [ 6, 30, 56, 82, 108, 134 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(13, 115), new com.google.zxing.qrcode.decoder.ECB(3, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(2, 46), new com.google.zxing.qrcode.decoder.ECB(29, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(42, 24), new com.google.zxing.qrcode.decoder.ECB(1, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(23, 15), new com.google.zxing.qrcode.decoder.ECB(28, 16))), new com.google.zxing.qrcode.decoder.Version(32, [ 6, 34, 60, 86, 112, 138 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1(30, new com.google.zxing.qrcode.decoder.ECB(17, 115)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(10, 46), new com.google.zxing.qrcode.decoder.ECB(23, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(10, 24), new com.google.zxing.qrcode.decoder.ECB(35, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(19, 15), new com.google.zxing.qrcode.decoder.ECB(35, 16))), new com.google.zxing.qrcode.decoder.Version(33, [ 6, 30, 58, 86, 114, 142 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(17, 115), new com.google.zxing.qrcode.decoder.ECB(1, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(14, 46), new com.google.zxing.qrcode.decoder.ECB(21, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(29, 24), new com.google.zxing.qrcode.decoder.ECB(19, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(11, 15), new com.google.zxing.qrcode.decoder.ECB(46, 16))), new com.google.zxing.qrcode.decoder.Version(34, [ 6, 34, 62, 90, 118, 146 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(13, 115), new com.google.zxing.qrcode.decoder.ECB(6, 116)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(14, 46), new com.google.zxing.qrcode.decoder.ECB(23, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(44, 24), new com.google.zxing.qrcode.decoder.ECB(7, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(59, 16), new com.google.zxing.qrcode.decoder.ECB(1, 17))), new com.google.zxing.qrcode.decoder.Version(35, [ 6, 30, 54, 78, 102, 126, 150 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(12, 121), new com.google.zxing.qrcode.decoder.ECB(7, 122)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(12, 47), new com.google.zxing.qrcode.decoder.ECB(26, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(39, 24), new com.google.zxing.qrcode.decoder.ECB(14, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(22, 15), new com.google.zxing.qrcode.decoder.ECB(41, 16))), new com.google.zxing.qrcode.decoder.Version(36, [ 6, 24, 50, 76, 102, 128, 154 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(6, 121), new com.google.zxing.qrcode.decoder.ECB(14, 122)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(6, 47), new com.google.zxing.qrcode.decoder.ECB(34, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(46, 24), new com.google.zxing.qrcode.decoder.ECB(10, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(2, 15), new com.google.zxing.qrcode.decoder.ECB(64, 16))), new com.google.zxing.qrcode.decoder.Version(37, [ 6, 28, 54, 80, 106, 132, 158 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(17, 122), new com.google.zxing.qrcode.decoder.ECB(4, 123)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(29, 46), new com.google.zxing.qrcode.decoder.ECB(14, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(49, 24), new com.google.zxing.qrcode.decoder.ECB(10, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(24, 15), new com.google.zxing.qrcode.decoder.ECB(46, 16))), new com.google.zxing.qrcode.decoder.Version(38, [ 6, 32, 58, 84, 110, 136, 162 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(4, 122), new com.google.zxing.qrcode.decoder.ECB(18, 123)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(13, 46), new com.google.zxing.qrcode.decoder.ECB(32, 47)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(48, 24), new com.google.zxing.qrcode.decoder.ECB(14, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(42, 15), new com.google.zxing.qrcode.decoder.ECB(32, 16))), new com.google.zxing.qrcode.decoder.Version(39, [ 6, 26, 54, 82, 110, 138, 166 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(20, 117), new com.google.zxing.qrcode.decoder.ECB(4, 118)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(40, 47), new com.google.zxing.qrcode.decoder.ECB(7, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(43, 24), new com.google.zxing.qrcode.decoder.ECB(22, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(10, 15), new com.google.zxing.qrcode.decoder.ECB(67, 16))), new com.google.zxing.qrcode.decoder.Version(40, [ 6, 30, 58, 86, 114, 142, 170 ], com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(19, 118), new com.google.zxing.qrcode.decoder.ECB(6, 119)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(28, new com.google.zxing.qrcode.decoder.ECB(18, 47), new com.google.zxing.qrcode.decoder.ECB(31, 48)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(34, 24), new com.google.zxing.qrcode.decoder.ECB(34, 25)), com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(30, new com.google.zxing.qrcode.decoder.ECB(20, 15), new com.google.zxing.qrcode.decoder.ECB(61, 16))) ];
}
com.google.zxing.qrcode.decoder.Version.prototype = {
    
    get_versionNumber: function com_google_zxing_qrcode_decoder_Version$get_versionNumber() {
        return this._versionNumber;
    },
    
    get_alignmentPatternCenters: function com_google_zxing_qrcode_decoder_Version$get_alignmentPatternCenters() {
        return this._alignmentPatternCenters;
    },
    
    get_totalCodewords: function com_google_zxing_qrcode_decoder_Version$get_totalCodewords() {
        return this._totalCodewords;
    },
    
    get_dimensionForVersion: function com_google_zxing_qrcode_decoder_Version$get_dimensionForVersion() {
        return 17 + 4 * this._versionNumber;
    },
    
    _versionNumber: 0,
    _alignmentPatternCenters: null,
    _ecBlocks: null,
    _totalCodewords: 0,
    
    getECBlocksForLevel: function com_google_zxing_qrcode_decoder_Version$getECBlocksForLevel(ecLevel) {
        return this._ecBlocks[ecLevel.ordinal()];
    },
    
    _buildFunctionPattern: function com_google_zxing_qrcode_decoder_Version$_buildFunctionPattern() {
        var dimension = this.get_dimensionForVersion();
        var bitMatrix = com.google.zxing.common.BitMatrix.createSquareInstance(dimension);
        bitMatrix.setRegion(0, 0, 9, 9);
        bitMatrix.setRegion(dimension - 8, 0, 8, 9);
        bitMatrix.setRegion(0, dimension - 8, 9, 8);
        var max = this._alignmentPatternCenters.length;
        for (var x = 0; x < max; x++) {
            var i = this._alignmentPatternCenters[x] - 2;
            for (var y = 0; y < max; y++) {
                if ((!x && (!y || y === max - 1)) || (x === max - 1 && !y)) {
                    continue;
                }
                bitMatrix.setRegion(this._alignmentPatternCenters[y] - 2, i, 5, 5);
            }
        }
        bitMatrix.setRegion(6, 9, 1, dimension - 17);
        bitMatrix.setRegion(9, 6, dimension - 17, 1);
        if (this._versionNumber > 6) {
            bitMatrix.setRegion(dimension - 11, 0, 3, 6);
            bitMatrix.setRegion(0, dimension - 11, 6, 3);
        }
        return bitMatrix;
    },
    
    toString: function com_google_zxing_qrcode_decoder_Version$toString() {
        return this._versionNumber.toString();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.ECBlocks

com.google.zxing.qrcode.decoder.ECBlocks = function com_google_zxing_qrcode_decoder_ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
    this._ecCodewordsPerBlock = ecCodewordsPerBlock;
    this._ecBlocks = [ ecBlocks1, ecBlocks2 ];
}
com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks1 = function com_google_zxing_qrcode_decoder_ECBlocks$_createECBlocks1(ecCodewords, ecBlocks) {
    var block = com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2(ecCodewords, ecBlocks, null);
    block._setECBlocks1(ecBlocks);
    return block;
}
com.google.zxing.qrcode.decoder.ECBlocks._createECBlocks2 = function com_google_zxing_qrcode_decoder_ECBlocks$_createECBlocks2(ecCodewords, ecBlocks1, ecBlocks2) {
    var block = new com.google.zxing.qrcode.decoder.ECBlocks(ecCodewords, ecBlocks1, ecBlocks2);
    block._setECBlocks2(ecBlocks1, ecBlocks2);
    return block;
}
com.google.zxing.qrcode.decoder.ECBlocks.prototype = {
    
    get_ecCodewordsPerBlock: function com_google_zxing_qrcode_decoder_ECBlocks$get_ecCodewordsPerBlock() {
        return this._ecCodewordsPerBlock;
    },
    
    get_numBlocks: function com_google_zxing_qrcode_decoder_ECBlocks$get_numBlocks() {
        var total = 0;
        for (var i = 0; i < this._ecBlocks.length; i++) {
            total += this._ecBlocks[i].get_count();
        }
        return total;
    },
    
    get_totalECCodewords: function com_google_zxing_qrcode_decoder_ECBlocks$get_totalECCodewords() {
        return this._ecCodewordsPerBlock * this.get_numBlocks();
    },
    
    _ecCodewordsPerBlock: 0,
    _ecBlocks: null,
    
    _getECBlocks: function com_google_zxing_qrcode_decoder_ECBlocks$_getECBlocks() {
        return this._ecBlocks;
    },
    
    _setECBlocks1: function com_google_zxing_qrcode_decoder_ECBlocks$_setECBlocks1(ecBlocks) {
        this._ecBlocks = [ ecBlocks ];
    },
    
    _setECBlocks2: function com_google_zxing_qrcode_decoder_ECBlocks$_setECBlocks2(ecBlocks1, ecBlocks2) {
        this._ecBlocks = [ ecBlocks1, ecBlocks2 ];
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.decoder.ECB

com.google.zxing.qrcode.decoder.ECB = function com_google_zxing_qrcode_decoder_ECB(count, dataCodewords) {
    this._count = count;
    this._dataCodewords = dataCodewords;
}
com.google.zxing.qrcode.decoder.ECB.prototype = {
    
    get_count: function com_google_zxing_qrcode_decoder_ECB$get_count() {
        return this._count;
    },
    
    get_dataCodewords: function com_google_zxing_qrcode_decoder_ECB$get_dataCodewords() {
        return this._dataCodewords;
    },
    
    _count: 0,
    _dataCodewords: 0
}


Type.registerNamespace('com.google.zxing.qrcode.detector');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector.AlignmentPattern

com.google.zxing.qrcode.detector.AlignmentPattern = function com_google_zxing_qrcode_detector_AlignmentPattern(posX, posY, estimatedModuleSize) {
    com.google.zxing.qrcode.detector.AlignmentPattern.initializeBase(this, [ posX, posY ]);
    this._estimatedModuleSize$1 = estimatedModuleSize;
}
com.google.zxing.qrcode.detector.AlignmentPattern.prototype = {
    _estimatedModuleSize$1: 0,
    
    _aboutEquals: function com_google_zxing_qrcode_detector_AlignmentPattern$_aboutEquals(moduleSize, i, j) {
        if (Math.abs(i - this.get_y()) <= moduleSize && Math.abs(j - this.get_x()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this._estimatedModuleSize$1);
            return moduleSizeDiff <= 1 || moduleSizeDiff / this._estimatedModuleSize$1 <= 1;
        }
        return false;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector._alignmentPatternFinder

com.google.zxing.qrcode.detector._alignmentPatternFinder = function com_google_zxing_qrcode_detector__alignmentPatternFinder(image, startX, startY, width, height, moduleSize, resultPointCallback) {
    this._image = image;
    this._possibleCenters = new Array(5);
    this._startX = startX;
    this._startY = startY;
    this._width = width;
    this._height = height;
    this._moduleSize = moduleSize;
    this._crossCheckStateCount = new Array(3);
    this._resultPointCallback = resultPointCallback;
}
com.google.zxing.qrcode.detector._alignmentPatternFinder._centerFromEnd = function com_google_zxing_qrcode_detector__alignmentPatternFinder$_centerFromEnd(stateCount, end) {
    return (end - stateCount[2]) - stateCount[1] / 2;
}
com.google.zxing.qrcode.detector._alignmentPatternFinder.prototype = {
    _image: null,
    _possibleCenters: null,
    _startX: 0,
    _startY: 0,
    _width: 0,
    _height: 0,
    _moduleSize: 0,
    _crossCheckStateCount: null,
    _resultPointCallback: null,
    
    _find: function com_google_zxing_qrcode_detector__alignmentPatternFinder$_find() {
        var startX = this._startX;
        var height = this._height;
        var maxJ = startX + this._width;
        var middleI = this._startY + (height >> 1);
        var stateCount = new Array(3);
        for (var iGen = 0; iGen < height; iGen++) {
            var i = middleI + ((!(iGen & 1)) ? ((iGen + 1) >> 1) : -((iGen + 1) >> 1));
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            var j = startX;
            while (j < maxJ && !this._image.get_Renamed(j, i)) {
                j++;
            }
            var currentState = 0;
            while (j < maxJ) {
                if (this._image.get_Renamed(j, i)) {
                    if (currentState === 1) {
                        stateCount[currentState]++;
                    }
                    else {
                        if (currentState === 2) {
                            if (this._foundPatternCross(stateCount)) {
                                var confirmed = this._handlePossibleCenter(stateCount, i, j);
                                if (confirmed != null) {
                                    return confirmed;
                                }
                            }
                            stateCount[0] = stateCount[2];
                            stateCount[1] = 1;
                            stateCount[2] = 0;
                            currentState = 1;
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                }
                else {
                    if (currentState === 1) {
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                j++;
            }
            if (this._foundPatternCross(stateCount)) {
                var confirmed = this._handlePossibleCenter(stateCount, i, maxJ);
                if (confirmed != null) {
                    return confirmed;
                }
            }
        }
        if (!(!this._possibleCenters.length)) {
            return this._possibleCenters[0];
        }
        throw new Error('ReaderException');
    },
    
    _foundPatternCross: function com_google_zxing_qrcode_detector__alignmentPatternFinder$_foundPatternCross(stateCount) {
        var moduleSize = this._moduleSize;
        var maxVariance = moduleSize / 2;
        for (var i = 0; i < 3; i++) {
            if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                return false;
            }
        }
        return true;
    },
    
    _crossCheckVertical: function com_google_zxing_qrcode_detector__alignmentPatternFinder$_crossCheckVertical(startI, centerJ, maxCount, originalStateCountTotal) {
        var image = this._image;
        var maxI = image.get_height();
        var stateCount = this._crossCheckStateCount;
        stateCount[0] = 0;
        stateCount[1] = 0;
        stateCount[2] = 0;
        var i = startI;
        while (i >= 0 && image.get_Renamed(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        if (i < 0 || stateCount[1] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i >= 0 && !image.get_Renamed(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        i = startI + 1;
        while (i < maxI && image.get_Renamed(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
        }
        if (i === maxI || stateCount[1] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i < maxI && !image.get_Renamed(centerJ, i) && stateCount[2] <= maxCount) {
            stateCount[2]++;
            i++;
        }
        if (stateCount[2] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return SystemExtend.SingleExtend.naN;
        }
        return (this._foundPatternCross(stateCount)) ? com.google.zxing.qrcode.detector._alignmentPatternFinder._centerFromEnd(stateCount, i) : SystemExtend.SingleExtend.naN;
    },
    
    _handlePossibleCenter: function com_google_zxing_qrcode_detector__alignmentPatternFinder$_handlePossibleCenter(stateCount, i, j) {
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        var centerJ = com.google.zxing.qrcode.detector._alignmentPatternFinder._centerFromEnd(stateCount, j);
        var centerI = this._crossCheckVertical(i, Math.floor(centerJ), 2 * stateCount[1], stateCountTotal);
        if (!SystemExtend.SingleExtend.isNaN(centerI)) {
            var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
            var max = this._possibleCenters.length;
            for (var index = 0; index < max; index++) {
                var center = this._possibleCenters[index];
                if (center._aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                    return new com.google.zxing.qrcode.detector.AlignmentPattern(centerJ, centerI, estimatedModuleSize);
                }
            }
            var point = new com.google.zxing.qrcode.detector.AlignmentPattern(centerJ, centerI, estimatedModuleSize);
            this._possibleCenters.add(point);
            if (this._resultPointCallback != null) {
                this._resultPointCallback.foundPossibleResultPoint(point);
            }
        }
        return null;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector.Detector

com.google.zxing.qrcode.detector.Detector = function com_google_zxing_qrcode_detector_Detector(image) {
    this._image = image;
}
com.google.zxing.qrcode.detector.Detector._sampleGrid = function com_google_zxing_qrcode_detector_Detector$_sampleGrid(image, transform, dimension) {
    var sampler = com.google.zxing.common.GridSampler.get_instance();
    return sampler.sampleGrid2(image, dimension, transform);
}
com.google.zxing.qrcode.detector.Detector.computeDimension = function com_google_zxing_qrcode_detector_Detector$computeDimension(topLeft, topRight, bottomLeft, moduleSize) {
    var tltrCentersDimension = com.google.zxing.qrcode.detector.Detector._round(com.google.zxing.ResultPoint.distance(topLeft, topRight) / moduleSize);
    var tlblCentersDimension = com.google.zxing.qrcode.detector.Detector._round(com.google.zxing.ResultPoint.distance(topLeft, bottomLeft) / moduleSize);
    var dimension = ((tltrCentersDimension + tlblCentersDimension) >> 1) + 7;
    switch (dimension & 3) {
        case 0:
            dimension++;
            break;
        case 2:
            dimension--;
            break;
        case 3:
            throw new Error('ReaderException');
    }
    return dimension;
}
com.google.zxing.qrcode.detector.Detector._round = function com_google_zxing_qrcode_detector_Detector$_round(d) {
    return Math.floor(d + 0.5);
}
com.google.zxing.qrcode.detector.Detector.prototype = {
    
    get_image: function com_google_zxing_qrcode_detector_Detector$get_image() {
        return this._image;
    },
    
    get_resultPointCallback: function com_google_zxing_qrcode_detector_Detector$get_resultPointCallback() {
        return this._resultPointCallback;
    },
    
    _image: null,
    _resultPointCallback: null,
    
    detect1: function com_google_zxing_qrcode_detector_Detector$detect1() {
        return this.detect2(null);
    },
    
    detect2: function com_google_zxing_qrcode_detector_Detector$detect2(hints) {
        this._resultPointCallback = (hints == null) ? null : hints[com.google.zxing.DecodeHintType.neeD_RESULT_POINT_CALLBACK];
        var finder = new com.google.zxing.qrcode.detector.FinderPatternFinder(this._image, this._resultPointCallback);
        var info = finder._find(hints);
        return this.processFinderPatternInfo(info);
    },
    
    processFinderPatternInfo: function com_google_zxing_qrcode_detector_Detector$processFinderPatternInfo(info) {
        var topLeft = info.get_topLeft();
        var topRight = info.get_topRight();
        var bottomLeft = info.get_bottomLeft();
        var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
        if (moduleSize < 1) {
            throw new Error('ReaderException');
        }
        var dimension = com.google.zxing.qrcode.detector.Detector.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
        var provisionalVersion = com.google.zxing.qrcode.decoder.Version.getProvisionalVersionForDimension(dimension);
        var modulesBetweenFPCenters = provisionalVersion.get_dimensionForVersion() - 7;
        var alignmentPattern = null;
        if (provisionalVersion.get_alignmentPatternCenters().length > 0) {
            var bottomRightX = topRight.get_x() - topLeft.get_x() + bottomLeft.get_x();
            var bottomRightY = topRight.get_y() - topLeft.get_y() + bottomLeft.get_y();
            var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
            var estAlignmentX = Math.floor(topLeft.get_x() + correctionToTopLeft * (bottomRightX - topLeft.get_x()));
            var estAlignmentY = Math.floor(topLeft.get_y() + correctionToTopLeft * (bottomRightY - topLeft.get_y()));
            for (var i = 4; i <= 16; i <<= 1) {
                try {
                    alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                    break;
                }
                catch (e) {
                    if (e.message.indexOf('ReaderException') < 0) {
                        throw e;
                    }
                }
            }
        }
        var transform = this.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
        var bits = com.google.zxing.qrcode.detector.Detector._sampleGrid(this._image, transform, dimension);
        var points;
        if (alignmentPattern == null) {
            points = [ bottomLeft, topLeft, topRight ];
        }
        else {
            points = [ bottomLeft, topLeft, topRight, alignmentPattern ];
        }
        return new com.google.zxing.common.DetectorResult(bits, points);
    },
    
    createTransform: function com_google_zxing_qrcode_detector_Detector$createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
        var dimMinusThree = dimension - 3.5;
        var bottomRightX;
        var bottomRightY;
        var sourceBottomRightX;
        var sourceBottomRightY;
        if (alignmentPattern != null) {
            bottomRightX = alignmentPattern.get_x();
            bottomRightY = alignmentPattern.get_y();
            sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3;
        }
        else {
            bottomRightX = (topRight.get_x() - topLeft.get_x()) + bottomLeft.get_x();
            bottomRightY = (topRight.get_y() - topLeft.get_y()) + bottomLeft.get_y();
            sourceBottomRightX = sourceBottomRightY = dimMinusThree;
        }
        var transform = com.google.zxing.common.PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.get_x(), topLeft.get_y(), topRight.get_x(), topRight.get_y(), bottomRightX, bottomRightY, bottomLeft.get_x(), bottomLeft.get_y());
        return transform;
    },
    
    calculateModuleSize: function com_google_zxing_qrcode_detector_Detector$calculateModuleSize(topLeft, topRight, bottomLeft) {
        return (this._calculateModuleSizeOneWay(topLeft, topRight) + this._calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
    },
    
    _calculateModuleSizeOneWay: function com_google_zxing_qrcode_detector_Detector$_calculateModuleSizeOneWay(pattern, otherPattern) {
        var moduleSizeEst1 = this._sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.get_x()), Math.floor(pattern.get_y()), Math.floor(otherPattern.get_x()), Math.floor(otherPattern.get_y()));
        var moduleSizeEst2 = this._sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.get_x()), Math.floor(otherPattern.get_y()), Math.floor(pattern.get_x()), Math.floor(pattern.get_y()));
        if (SystemExtend.SingleExtend.isNaN(moduleSizeEst1)) {
            return moduleSizeEst2 / 7;
        }
        if (SystemExtend.SingleExtend.isNaN(moduleSizeEst2)) {
            return moduleSizeEst1 / 7;
        }
        return (moduleSizeEst1 + moduleSizeEst2) / 14;
    },
    
    _sizeOfBlackWhiteBlackRunBothWays: function com_google_zxing_qrcode_detector_Detector$_sizeOfBlackWhiteBlackRunBothWays(fromX, fromY, toX, toY) {
        var result = this._sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
        var scale = 1;
        var otherToX = fromX - (toX - fromX);
        if (otherToX < 0) {
            scale = fromX / (fromX - otherToX);
            otherToX = 0;
        }
        else if (otherToX >= this._image.get_width()) {
            scale = (this._image.get_width() - 1 - fromX) / (otherToX - fromX);
            otherToX = this._image.get_width() - 1;
        }
        var otherToY = Math.floor(fromY - (toY - fromY) * scale);
        scale = 1;
        if (otherToY < 0) {
            scale = fromY / (fromY - otherToY);
            otherToY = 0;
        }
        else if (otherToY >= this._image.get_height()) {
            scale = (this._image.get_height() - 1 - fromY) / (otherToY - fromY);
            otherToY = this._image.get_height() - 1;
        }
        otherToX = Math.floor(fromX + (otherToX - fromX) * scale);
        result += this._sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
        return result - 1;
    },
    
    _sizeOfBlackWhiteBlackRun: function com_google_zxing_qrcode_detector_Detector$_sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY) {
        var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
        if (steep) {
            var temp = fromX;
            fromX = fromY;
            fromY = temp;
            temp = toX;
            toX = toY;
            toY = temp;
        }
        var dx = Math.abs(toX - fromX);
        var dy = Math.abs(toY - fromY);
        var error = -dx >> 1;
        var ystep = (fromY < toY) ? 1 : -1;
        var xstep = (fromX < toX) ? 1 : -1;
        var state = 0;
        for (var x = fromX, y = fromY; x !== toX; x += xstep) {
            var realX = (steep) ? y : x;
            var realY = (steep) ? x : y;
            if (state === 1) {
                if (this._image.get_Renamed(realX, realY)) {
                    state++;
                }
            }
            else {
                if (!this._image.get_Renamed(realX, realY)) {
                    state++;
                }
            }
            if (state === 3) {
                var diffX = x - fromX;
                var diffY = y - fromY;
                return Math.sqrt((diffX * diffX + diffY * diffY));
            }
            error += dy;
            if (error > 0) {
                if (y === toY) {
                    break;
                }
                y += ystep;
                error -= dx;
            }
        }
        var diffX2 = toX - fromX;
        var diffY2 = toY - fromY;
        return Math.sqrt((diffX2 * diffX2 + diffY2 * diffY2));
    },
    
    findAlignmentInRegion: function com_google_zxing_qrcode_detector_Detector$findAlignmentInRegion(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
        var allowance = Math.floor(allowanceFactor * overallEstModuleSize);
        var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
        var alignmentAreaRightX = Math.min(this._image.get_width() - 1, estAlignmentX + allowance);
        if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
            throw new Error('ReaderException');
        }
        var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
        var alignmentAreaBottomY = Math.min(this._image.get_height() - 1, estAlignmentY + allowance);
        var alignmentFinder = new com.google.zxing.qrcode.detector._alignmentPatternFinder(this._image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this._resultPointCallback);
        return alignmentFinder._find();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector.FinderPattern

com.google.zxing.qrcode.detector.FinderPattern = function com_google_zxing_qrcode_detector_FinderPattern(posX, posY, estimatedModuleSize) {
    com.google.zxing.qrcode.detector.FinderPattern.initializeBase(this, [ posX, posY ]);
    this._estimatedModuleSize$1 = estimatedModuleSize;
    this._count$1 = 1;
}
com.google.zxing.qrcode.detector.FinderPattern.prototype = {
    
    get_estimatedModuleSize: function com_google_zxing_qrcode_detector_FinderPattern$get_estimatedModuleSize() {
        return this._estimatedModuleSize$1;
    },
    
    get__count: function com_google_zxing_qrcode_detector_FinderPattern$get__count() {
        return this._count$1;
    },
    
    _estimatedModuleSize$1: 0,
    _count$1: 0,
    
    _incrementCount: function com_google_zxing_qrcode_detector_FinderPattern$_incrementCount() {
        this._count$1++;
    },
    
    _aboutEquals: function com_google_zxing_qrcode_detector_FinderPattern$_aboutEquals(moduleSize, i, j) {
        if (Math.abs(i - this.get_y()) <= moduleSize && Math.abs(j - this.get_x()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this._estimatedModuleSize$1);
            return moduleSizeDiff <= 1 || moduleSizeDiff / this._estimatedModuleSize$1 <= 1;
        }
        return false;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector.FinderPatternFinder

com.google.zxing.qrcode.detector.FinderPatternFinder = function com_google_zxing_qrcode_detector_FinderPatternFinder(image, resultPointCallback) {
    this._image = image;
    this._possibleCenters = [];
    this._crossCheckStateCount = new Array(5);
    this._resultPointCallback = resultPointCallback;
}
com.google.zxing.qrcode.detector.FinderPatternFinder._centerFromEnd = function com_google_zxing_qrcode_detector_FinderPatternFinder$_centerFromEnd(stateCount, end) {
    return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2;
}
com.google.zxing.qrcode.detector.FinderPatternFinder.foundPatternCross = function com_google_zxing_qrcode_detector_FinderPatternFinder$foundPatternCross(stateCount) {
    var totalModuleSize = 0;
    for (var i = 0; i < 5; i++) {
        var count = stateCount[i];
        if (!count) {
            return false;
        }
        totalModuleSize += count;
    }
    if (totalModuleSize < 7) {
        return false;
    }
    var moduleSize = Math.floor((totalModuleSize << 8) / 7);
    var maxVariance = Math.floor(moduleSize / 2);
    return Math.abs(moduleSize - (stateCount[0] << 8)) < maxVariance && Math.abs(moduleSize - (stateCount[1] << 8)) < maxVariance && Math.abs(3 * moduleSize - (stateCount[2] << 8)) < 3 * maxVariance && Math.abs(moduleSize - (stateCount[3] << 8)) < maxVariance && Math.abs(moduleSize - (stateCount[4] << 8)) < maxVariance;
}
com.google.zxing.qrcode.detector.FinderPatternFinder.prototype = {
    
    get_image: function com_google_zxing_qrcode_detector_FinderPatternFinder$get_image() {
        return this._image;
    },
    
    get_possibleCenters: function com_google_zxing_qrcode_detector_FinderPatternFinder$get_possibleCenters() {
        return this._possibleCenters;
    },
    
    get__crossCheckStateCount: function com_google_zxing_qrcode_detector_FinderPatternFinder$get__crossCheckStateCount() {
        this._crossCheckStateCount[0] = 0;
        this._crossCheckStateCount[1] = 0;
        this._crossCheckStateCount[2] = 0;
        this._crossCheckStateCount[3] = 0;
        this._crossCheckStateCount[4] = 0;
        return this._crossCheckStateCount;
    },
    
    _image: null,
    _possibleCenters: null,
    _hasSkipped: false,
    _crossCheckStateCount: null,
    _resultPointCallback: null,
    
    _find: function com_google_zxing_qrcode_detector_FinderPatternFinder$_find(hints) {
        var tryHarder = hints != null && Object.keyExists(hints, com.google.zxing.DecodeHintType.trY_HARDER);
        var maxI = this._image.get_height();
        var maxJ = this._image.get_width();
        var iSkip = Math.floor((3 * maxI) / (4 * 57));
        if (iSkip < 3 || tryHarder) {
            iSkip = 3;
        }
        var done = false;
        var stateCount = new Array(5);
        for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            stateCount[3] = 0;
            stateCount[4] = 0;
            var currentState = 0;
            for (var j = 0; j < maxJ; j++) {
                if (this._image.get_Renamed(j, i)) {
                    if ((currentState & 1) === 1) {
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                else {
                    if (!(currentState & 1)) {
                        if (currentState === 4) {
                            if (com.google.zxing.qrcode.detector.FinderPatternFinder.foundPatternCross(stateCount)) {
                                var confirmed = this.handlePossibleCenter(stateCount, i, j);
                                if (confirmed) {
                                    iSkip = 2;
                                    if (this._hasSkipped) {
                                        done = this._haveMultiplyConfirmedCenters();
                                    }
                                    else {
                                        var rowSkip = this._findRowSkip();
                                        if (rowSkip > stateCount[2]) {
                                            i += rowSkip - stateCount[2] - iSkip;
                                            j = maxJ - 1;
                                        }
                                    }
                                }
                                else {
                                    do {
                                        j++;
                                    } while (j < maxJ && !this._image.get_Renamed(j, i));
                                    j--;
                                }
                                currentState = 0;
                                stateCount[0] = 0;
                                stateCount[1] = 0;
                                stateCount[2] = 0;
                                stateCount[3] = 0;
                                stateCount[4] = 0;
                            }
                            else {
                                stateCount[0] = stateCount[2];
                                stateCount[1] = stateCount[3];
                                stateCount[2] = stateCount[4];
                                stateCount[3] = 1;
                                stateCount[4] = 0;
                                currentState = 3;
                            }
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                    else {
                        stateCount[currentState]++;
                    }
                }
            }
            if (com.google.zxing.qrcode.detector.FinderPatternFinder.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                if (confirmed) {
                    iSkip = stateCount[0];
                    if (this._hasSkipped) {
                        done = this._haveMultiplyConfirmedCenters();
                    }
                }
            }
        }
        var patternInfo = this._selectBestPatterns();
        com.google.zxing.ResultPoint.orderBestPatterns(patternInfo);
        return new com.google.zxing.qrcode.detector.FinderPatternInfo(patternInfo);
    },
    
    _crossCheckVertical: function com_google_zxing_qrcode_detector_FinderPatternFinder$_crossCheckVertical(startI, centerJ, maxCount, originalStateCountTotal) {
        var image = this._image;
        var maxI = image.get_height();
        var stateCount = this.get__crossCheckStateCount();
        var i = startI;
        while (i >= 0 && image.get_Renamed(centerJ, i)) {
            stateCount[2]++;
            i--;
        }
        if (i < 0) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i >= 0 && !image.get_Renamed(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        if (i < 0 || stateCount[1] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i >= 0 && image.get_Renamed(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        i = startI + 1;
        while (i < maxI && image.get_Renamed(centerJ, i)) {
            stateCount[2]++;
            i++;
        }
        if (i === maxI) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i < maxI && !image.get_Renamed(centerJ, i) && stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
        }
        if (i === maxI || stateCount[3] >= maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (i < maxI && image.get_Renamed(centerJ, i) && stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
        }
        if (stateCount[4] >= maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return SystemExtend.SingleExtend.naN;
        }
        return (com.google.zxing.qrcode.detector.FinderPatternFinder.foundPatternCross(stateCount)) ? com.google.zxing.qrcode.detector.FinderPatternFinder._centerFromEnd(stateCount, i) : SystemExtend.SingleExtend.naN;
    },
    
    _crossCheckHorizontal: function com_google_zxing_qrcode_detector_FinderPatternFinder$_crossCheckHorizontal(startJ, centerI, maxCount, originalStateCountTotal) {
        var image = this._image;
        var maxJ = image.get_width();
        var stateCount = this.get__crossCheckStateCount();
        var j = startJ;
        while (j >= 0 && image.get_Renamed(j, centerI)) {
            stateCount[2]++;
            j--;
        }
        if (j < 0) {
            return SystemExtend.SingleExtend.naN;
        }
        while (j >= 0 && !image.get_Renamed(j, centerI) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            j--;
        }
        if (j < 0 || stateCount[1] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (j >= 0 && image.get_Renamed(j, centerI) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            j--;
        }
        if (stateCount[0] > maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        j = startJ + 1;
        while (j < maxJ && image.get_Renamed(j, centerI)) {
            stateCount[2]++;
            j++;
        }
        if (j === maxJ) {
            return SystemExtend.SingleExtend.naN;
        }
        while (j < maxJ && !image.get_Renamed(j, centerI) && stateCount[3] < maxCount) {
            stateCount[3]++;
            j++;
        }
        if (j === maxJ || stateCount[3] >= maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        while (j < maxJ && image.get_Renamed(j, centerI) && stateCount[4] < maxCount) {
            stateCount[4]++;
            j++;
        }
        if (stateCount[4] >= maxCount) {
            return SystemExtend.SingleExtend.naN;
        }
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
            return SystemExtend.SingleExtend.naN;
        }
        return (com.google.zxing.qrcode.detector.FinderPatternFinder.foundPatternCross(stateCount)) ? com.google.zxing.qrcode.detector.FinderPatternFinder._centerFromEnd(stateCount, j) : SystemExtend.SingleExtend.naN;
    },
    
    handlePossibleCenter: function com_google_zxing_qrcode_detector_FinderPatternFinder$handlePossibleCenter(stateCount, i, j) {
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
        var centerJ = com.google.zxing.qrcode.detector.FinderPatternFinder._centerFromEnd(stateCount, j);
        var centerI = this._crossCheckVertical(i, Math.floor(centerJ), stateCount[2], stateCountTotal);
        if (!SystemExtend.SingleExtend.isNaN(centerI)) {
            centerJ = this._crossCheckHorizontal(Math.floor(centerJ), Math.floor(centerI), stateCount[2], stateCountTotal);
            if (!SystemExtend.SingleExtend.isNaN(centerJ)) {
                var estimatedModuleSize = stateCountTotal / 7;
                var found = false;
                var max = this._possibleCenters.length;
                for (var index = 0; index < max; index++) {
                    var center = this._possibleCenters[index];
                    if (center._aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                        center._incrementCount();
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var point = new com.google.zxing.qrcode.detector.FinderPattern(centerJ, centerI, estimatedModuleSize);
                    this._possibleCenters.add(point);
                    if (this._resultPointCallback != null) {
                        this._resultPointCallback.foundPossibleResultPoint(point);
                    }
                }
                return true;
            }
        }
        return false;
    },
    
    _findRowSkip: function com_google_zxing_qrcode_detector_FinderPatternFinder$_findRowSkip() {
        var max = this._possibleCenters.length;
        if (max <= 1) {
            return 0;
        }
        var firstConfirmedCenter = null;
        for (var i = 0; i < max; i++) {
            var center = this._possibleCenters[i];
            if (center.get__count() >= 2) {
                if (firstConfirmedCenter == null) {
                    firstConfirmedCenter = center;
                }
                else {
                    this._hasSkipped = true;
                    return Math.floor((Math.abs(firstConfirmedCenter.get_x() - center.get_x()) - Math.abs(firstConfirmedCenter.get_y() - center.get_y())) / 2);
                }
            }
        }
        return 0;
    },
    
    _haveMultiplyConfirmedCenters: function com_google_zxing_qrcode_detector_FinderPatternFinder$_haveMultiplyConfirmedCenters() {
        var confirmedCount = 0;
        var totalModuleSize = 0;
        var max = this._possibleCenters.length;
        for (var i = 0; i < max; i++) {
            var pattern = this._possibleCenters[i];
            if (pattern.get__count() >= 2) {
                confirmedCount++;
                totalModuleSize += pattern.get_estimatedModuleSize();
            }
        }
        if (confirmedCount < 3) {
            return false;
        }
        var average = totalModuleSize / max;
        var totalDeviation = 0;
        for (var i = 0; i < max; i++) {
            var pattern = this._possibleCenters[i];
            totalDeviation += Math.abs(pattern.get_estimatedModuleSize() - average);
        }
        return totalDeviation <= 0.05 * totalModuleSize;
    },
    
    _selectBestPatterns: function com_google_zxing_qrcode_detector_FinderPatternFinder$_selectBestPatterns() {
        var startSize = this._possibleCenters.length;
        if (startSize < 3) {
            throw new Error('ReaderException');
        }
        if (startSize > 3) {
            var totalModuleSize = 0;
            for (var i = 0; i < startSize; i++) {
                totalModuleSize += (this._possibleCenters[i]).get_estimatedModuleSize();
            }
            var average = totalModuleSize / startSize;
            for (var i = 0; i < this._possibleCenters.length && this._possibleCenters.length > 3; i++) {
                var pattern = this._possibleCenters[i];
                if (Math.abs(pattern.get_estimatedModuleSize() - average) > 0.2 * average) {
                    this._possibleCenters.removeAt(i);
                    i--;
                }
            }
        }
        if (this._possibleCenters.length > 3) {
            com.google.zxing.common.Collections.insertionSort(this._possibleCenters, new com.google.zxing.qrcode.detector._centerComparator());
            SupportClass.setCapacity(this._possibleCenters, 3);
        }
        return [ this._possibleCenters[0], this._possibleCenters[1], this._possibleCenters[2] ];
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector._centerComparator

com.google.zxing.qrcode.detector._centerComparator = function com_google_zxing_qrcode_detector__centerComparator() {
}
com.google.zxing.qrcode.detector._centerComparator.prototype = {
    
    compare: function com_google_zxing_qrcode_detector__centerComparator$compare(center1, center2) {
        return (center2).get__count() - (center1).get__count();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.detector.FinderPatternInfo

com.google.zxing.qrcode.detector.FinderPatternInfo = function com_google_zxing_qrcode_detector_FinderPatternInfo(patternCenters) {
    this._bottomLeft = patternCenters[0];
    this._topLeft = patternCenters[1];
    this._topRight = patternCenters[2];
}
com.google.zxing.qrcode.detector.FinderPatternInfo.prototype = {
    
    get_bottomLeft: function com_google_zxing_qrcode_detector_FinderPatternInfo$get_bottomLeft() {
        return this._bottomLeft;
    },
    
    get_topLeft: function com_google_zxing_qrcode_detector_FinderPatternInfo$get_topLeft() {
        return this._topLeft;
    },
    
    get_topRight: function com_google_zxing_qrcode_detector_FinderPatternInfo$get_topRight() {
        return this._topRight;
    },
    
    _bottomLeft: null,
    _topLeft: null,
    _topRight: null
}


Type.registerNamespace('com.google.zxing.qrcode.encoder');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder.BitVector

com.google.zxing.qrcode.encoder.BitVector = function com_google_zxing_qrcode_encoder_BitVector() {
    this._sizeInBits = 0;
    this._array = new Array(32);
}
com.google.zxing.qrcode.encoder.BitVector.prototype = {
    
    get_array: function com_google_zxing_qrcode_encoder_BitVector$get_array() {
        return this._array;
    },
    
    _sizeInBits: 0,
    _array: null,
    
    at: function com_google_zxing_qrcode_encoder_BitVector$at(index) {
        if (index < 0 || index >= this._sizeInBits) {
            throw new Error('ArgumentException: Bad index: ' + index);
        }
        var value_Renamed = this._array[index >> 3] & 255;
        return (value_Renamed >> (7 - (index & 7))) & 1;
    },
    
    size: function com_google_zxing_qrcode_encoder_BitVector$size() {
        return this._sizeInBits;
    },
    
    sizeInBytes: function com_google_zxing_qrcode_encoder_BitVector$sizeInBytes() {
        return (this._sizeInBits + 7) >> 3;
    },
    
    appendBit: function com_google_zxing_qrcode_encoder_BitVector$appendBit(bit) {
        if (!(!bit || bit === 1)) {
            throw new Error('ArgumentException: Bad bit');
        }
        var numBitsInLastByte = this._sizeInBits & 7;
        if (!numBitsInLastByte) {
            this._appendByte(0);
            this._sizeInBits -= 8;
        }
        this._array[this._sizeInBits >> 3] |= (bit << (7 - numBitsInLastByte));
        ++this._sizeInBits;
    },
    
    appendBits: function com_google_zxing_qrcode_encoder_BitVector$appendBits(value_Renamed, numBits) {
        if (numBits < 0 || numBits > 32) {
            throw new Error('ArgumentException: Num bits must be between 0 and 32');
        }
        var numBitsLeft = numBits;
        while (numBitsLeft > 0) {
            if (!(this._sizeInBits & 7) && numBitsLeft >= 8) {
                var newByte = (value_Renamed >> (numBitsLeft - 8)) & 255;
                this._appendByte(newByte);
                numBitsLeft -= 8;
            }
            else {
                var bit = (value_Renamed >> (numBitsLeft - 1)) & 1;
                this.appendBit(bit);
                --numBitsLeft;
            }
        }
    },
    
    appendBitVector: function com_google_zxing_qrcode_encoder_BitVector$appendBitVector(bits) {
        var size = bits.size();
        for (var i = 0; i < size; ++i) {
            this.appendBit(bits.at(i));
        }
    },
    
    xor: function com_google_zxing_qrcode_encoder_BitVector$xor(other) {
        if (this._sizeInBits !== other.size()) {
            throw new Error("ArgumentException: BitVector sizes don't match");
        }
        var sizeInBytes = (this._sizeInBits + 7) >> 3;
        for (var i = 0; i < sizeInBytes; ++i) {
            this._array[i] ^= other._array[i];
        }
    },
    
    toString: function com_google_zxing_qrcode_encoder_BitVector$toString() {
        var result = new ss.StringBuilder();
        for (var i = 0; i < this._sizeInBits; ++i) {
            if (!this.at(i)) {
                result.append('0');
            }
            else if (this.at(i) === 1) {
                result.append('1');
            }
            else {
                throw new Error("ArgumentException: Byte isn't 0 or 1");
            }
        }
        return result.toString();
    },
    
    _appendByte: function com_google_zxing_qrcode_encoder_BitVector$_appendByte(value_Renamed) {
        if ((this._sizeInBits >> 3) === this._array.length) {
            var newArray = new Array((this._array.length << 1));
            SystemExtend.ArrayExtend.copy(this._array, 0, newArray, 0, this._array.length);
            this._array = newArray;
        }
        this._array[this._sizeInBits >> 3] = value_Renamed;
        this._sizeInBits += 8;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder._blockPair

com.google.zxing.qrcode.encoder._blockPair = function com_google_zxing_qrcode_encoder__blockPair(data, errorCorrection) {
    this._dataBytes = data;
    this._errorCorrectionBytes = errorCorrection;
}
com.google.zxing.qrcode.encoder._blockPair.prototype = {
    
    get_dataBytes: function com_google_zxing_qrcode_encoder__blockPair$get_dataBytes() {
        return this._dataBytes;
    },
    
    get_errorCorrectionBytes: function com_google_zxing_qrcode_encoder__blockPair$get_errorCorrectionBytes() {
        return this._errorCorrectionBytes;
    },
    
    _dataBytes: null,
    _errorCorrectionBytes: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder.Encoder

com.google.zxing.qrcode.encoder.Encoder = function com_google_zxing_qrcode_encoder_Encoder() {
}
com.google.zxing.qrcode.encoder.Encoder._calculateMaskPenalty = function com_google_zxing_qrcode_encoder_Encoder$_calculateMaskPenalty(matrix) {
    var penalty = 0;
    penalty += com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule1(matrix);
    penalty += com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule2(matrix);
    penalty += com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule3(matrix);
    penalty += com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule4(matrix);
    return penalty;
}
com.google.zxing.qrcode.encoder.Encoder.encode1 = function com_google_zxing_qrcode_encoder_Encoder$encode1(content, ecLevel, qrCode) {
    com.google.zxing.qrcode.encoder.Encoder.encode2(content, ecLevel, null, qrCode);
}
com.google.zxing.qrcode.encoder.Encoder.encode2 = function com_google_zxing_qrcode_encoder_Encoder$encode2(content, ecLevel, hints, qrCode) {
    var encoding = (hints == null) ? null : hints[com.google.zxing.EncodeHintType.characteR_SET];
    if (encoding == null) {
        encoding = 'ISO-8859-1';
    }
    var mode = com.google.zxing.qrcode.encoder.Encoder.chooseMode2(content, encoding);
    var dataBits = new com.google.zxing.qrcode.encoder.BitVector();
    com.google.zxing.qrcode.encoder.Encoder._appendBytes(content, mode, dataBits, encoding);
    var numInputBytes = dataBits.sizeInBytes();
    com.google.zxing.qrcode.encoder.Encoder._initQRCode(numInputBytes, ecLevel, mode, qrCode);
    var headerAndDataBits = new com.google.zxing.qrcode.encoder.BitVector();
    if (mode === com.google.zxing.qrcode.decoder.Mode.BYTE && !('ISO-8859-1' === encoding)) {
        var eci = com.google.zxing.common.CharacterSetECI.getCharacterSetECIByName(encoding);
        if (eci != null) {
            com.google.zxing.qrcode.encoder.Encoder._appendECI(eci, headerAndDataBits);
        }
    }
    com.google.zxing.qrcode.encoder.Encoder._appendModeInfo(mode, headerAndDataBits);
    var numLetters = (mode === com.google.zxing.qrcode.decoder.Mode.BYTE) ? dataBits.sizeInBytes() : content.length;
    com.google.zxing.qrcode.encoder.Encoder._appendLengthInfo(numLetters, qrCode.get_version(), mode, headerAndDataBits);
    headerAndDataBits.appendBitVector(dataBits);
    com.google.zxing.qrcode.encoder.Encoder._terminateBits(qrCode.get_numDataBytes(), headerAndDataBits);
    var finalBits = new com.google.zxing.qrcode.encoder.BitVector();
    com.google.zxing.qrcode.encoder.Encoder._interleaveWithECBytes(headerAndDataBits, qrCode.get_numTotalBytes(), qrCode.get_numDataBytes(), qrCode.get_numRSBlocks(), finalBits);
    var matrix = new com.google.zxing.common.ByteMatrix(qrCode.get_matrixWidth(), qrCode.get_matrixWidth());
    qrCode.set_maskPattern(com.google.zxing.qrcode.encoder.Encoder._chooseMaskPattern(finalBits, qrCode.get_ecLevel(), qrCode.get_version(), matrix));
    com.google.zxing.qrcode.encoder.MatrixUtil.buildMatrix(finalBits, qrCode.get_ecLevel(), qrCode.get_version(), qrCode.get_maskPattern(), matrix);
    qrCode.set_matrix(matrix);
    if (!qrCode.get_valid()) {
        throw new Error('WriterException: Invalid QR code: ' + qrCode.toString());
    }
}
com.google.zxing.qrcode.encoder.Encoder._getAlphanumericCode = function com_google_zxing_qrcode_encoder_Encoder$_getAlphanumericCode(code) {
    if (code < com.google.zxing.qrcode.encoder.Encoder._alphanumeriC_TABLE.length) {
        return com.google.zxing.qrcode.encoder.Encoder._alphanumeriC_TABLE[code];
    }
    return -1;
}
com.google.zxing.qrcode.encoder.Encoder.chooseMode1 = function com_google_zxing_qrcode_encoder_Encoder$chooseMode1(content) {
    return com.google.zxing.qrcode.encoder.Encoder.chooseMode2(content, null);
}
com.google.zxing.qrcode.encoder.Encoder.chooseMode2 = function com_google_zxing_qrcode_encoder_Encoder$chooseMode2(content, encoding) {
    if ('Shift_JIS' === encoding) {
        return (com.google.zxing.qrcode.encoder.Encoder._isOnlyDoubleByteKanji(content)) ? com.google.zxing.qrcode.decoder.Mode.KANJI : com.google.zxing.qrcode.decoder.Mode.BYTE;
    }
    var hasNumeric = false;
    var hasAlphanumeric = false;
    for (var i = 0; i < content.length; ++i) {
        var c = content.charAt(i);
        if (SystemExtend.CharExtend.toInt32(c) >= SystemExtend.CharExtend.toInt32('0') && SystemExtend.CharExtend.toInt32(c) <= SystemExtend.CharExtend.toInt32('9')) {
            hasNumeric = true;
        }
        else if (com.google.zxing.qrcode.encoder.Encoder._getAlphanumericCode(SystemExtend.CharExtend.toInt32(c)) !== -1) {
            hasAlphanumeric = true;
        }
        else {
            return com.google.zxing.qrcode.decoder.Mode.BYTE;
        }
    }
    if (hasAlphanumeric) {
        return com.google.zxing.qrcode.decoder.Mode.ALPHANUMERIC;
    }
    else if (hasNumeric) {
        return com.google.zxing.qrcode.decoder.Mode.NUMERIC;
    }
    return com.google.zxing.qrcode.decoder.Mode.BYTE;
}
com.google.zxing.qrcode.encoder.Encoder._isOnlyDoubleByteKanji = function com_google_zxing_qrcode_encoder_Encoder$_isOnlyDoubleByteKanji(content) {
    var bytes;
    try {
        bytes = SupportClass.toSByteArray(SystemExtend.Text.Encoding.getEncoding('Shift_JIS').getBytes(content));
    }
    catch ($e1) {
        return false;
    }
    var length = bytes.length;
    if (!!(length % 2)) {
        return false;
    }
    for (var i = 0; i < length; i += 2) {
        var byte1 = bytes[i] & 255;
        if ((byte1 < 129 || byte1 > 159) && (byte1 < 224 || byte1 > 235)) {
            return false;
        }
    }
    return true;
}
com.google.zxing.qrcode.encoder.Encoder._chooseMaskPattern = function com_google_zxing_qrcode_encoder_Encoder$_chooseMaskPattern(bits, ecLevel, version, matrix) {
    var minPenalty = SystemExtend.Int32Extend.maxValue;
    var bestMaskPattern = -1;
    for (var maskPattern = 0; maskPattern < 8; maskPattern++) {
        com.google.zxing.qrcode.encoder.MatrixUtil.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
        var penalty = com.google.zxing.qrcode.encoder.Encoder._calculateMaskPenalty(matrix);
        if (penalty < minPenalty) {
            minPenalty = penalty;
            bestMaskPattern = maskPattern;
        }
    }
    return bestMaskPattern;
}
com.google.zxing.qrcode.encoder.Encoder._initQRCode = function com_google_zxing_qrcode_encoder_Encoder$_initQRCode(numInputBytes, ecLevel, mode, qrCode) {
    qrCode.set_ecLevel(ecLevel);
    qrCode.set_mode(mode);
    for (var versionNum = 1; versionNum <= 40; versionNum++) {
        var version = com.google.zxing.qrcode.decoder.Version.getVersionForNumber(versionNum);
        var numBytes = version.get_totalCodewords();
        var ecBlocks = version.getECBlocksForLevel(ecLevel);
        var numEcBytes = ecBlocks.get_totalECCodewords();
        var numRSBlocks = ecBlocks.get_numBlocks();
        var numDataBytes = numBytes - numEcBytes;
        if (numDataBytes >= numInputBytes + 3) {
            qrCode.set_version(versionNum);
            qrCode.set_numTotalBytes(numBytes);
            qrCode.set_numDataBytes(numDataBytes);
            qrCode.set_numRSBlocks(numRSBlocks);
            qrCode.set_numECBytes(numEcBytes);
            qrCode.set_matrixWidth(version.get_dimensionForVersion());
            return;
        }
    }
    throw new Error('WriterException: Cannot find proper rs block info (input data too big?)');
}
com.google.zxing.qrcode.encoder.Encoder._terminateBits = function com_google_zxing_qrcode_encoder_Encoder$_terminateBits(numDataBytes, bits) {
    var capacity = numDataBytes << 3;
    if (bits.size() > capacity) {
        throw new Error('WriterException: data bits cannot fit in the QR Code' + bits.size() + ' > ' + capacity);
    }
    for (var i = 0; i < 4 && bits.size() < capacity; ++i) {
        bits.appendBit(0);
    }
    var numBitsInLastByte = bits.size() % 8;
    if (numBitsInLastByte > 0) {
        var numPaddingBits = 8 - numBitsInLastByte;
        for (var i = 0; i < numPaddingBits; ++i) {
            bits.appendBit(0);
        }
    }
    if (!!(bits.size() % 8)) {
        throw new Error('WriterException: Number of bits is not a multiple of 8');
    }
    var numPaddingBytes = numDataBytes - bits.sizeInBytes();
    for (var i = 0; i < numPaddingBytes; ++i) {
        if (!(i % 2)) {
            bits.appendBits(236, 8);
        }
        else {
            bits.appendBits(17, 8);
        }
    }
    if (bits.size() !== capacity) {
        throw new Error('WriterException: Bits size does not equal capacity');
    }
}
com.google.zxing.qrcode.encoder.Encoder._getNumDataBytesAndNumECBytesForBlockID = function com_google_zxing_qrcode_encoder_Encoder$_getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, blockID, numDataBytesInBlock, numECBytesInBlock) {
    if (blockID >= numRSBlocks) {
        throw new Error('WriterException: Block ID too large');
    }
    var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
    var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
    var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
    var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
    var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
    var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
    var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
    var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
    if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
        throw new Error('WriterException: EC bytes mismatch');
    }
    if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
        throw new Error('WriterException: RS blocks mismatch');
    }
    if (numTotalBytes !== ((numDataBytesInGroup1 + numEcBytesInGroup1) * numRsBlocksInGroup1) + ((numDataBytesInGroup2 + numEcBytesInGroup2) * numRsBlocksInGroup2)) {
        throw new Error('WriterException: Total bytes mismatch');
    }
    if (blockID < numRsBlocksInGroup1) {
        numDataBytesInBlock[0] = numDataBytesInGroup1;
        numECBytesInBlock[0] = numEcBytesInGroup1;
    }
    else {
        numDataBytesInBlock[0] = numDataBytesInGroup2;
        numECBytesInBlock[0] = numEcBytesInGroup2;
    }
}
com.google.zxing.qrcode.encoder.Encoder._interleaveWithECBytes = function com_google_zxing_qrcode_encoder_Encoder$_interleaveWithECBytes(bits, numTotalBytes, numDataBytes, numRSBlocks, result) {
    if (bits.sizeInBytes() !== numDataBytes) {
        throw new Error('WriterException: Number of bits and data bytes does not match');
    }
    var dataBytesOffset = 0;
    var maxNumDataBytes = 0;
    var maxNumEcBytes = 0;
    var blocks = new Array(numRSBlocks);
    for (var i = 0; i < numRSBlocks; ++i) {
        var numDataBytesInBlock = new Array(1);
        var numEcBytesInBlock = new Array(1);
        com.google.zxing.qrcode.encoder.Encoder._getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
        var dataBytes = new com.google.zxing.common.ByteArray(0);
        dataBytes.set_Renamed2(bits.get_array(), dataBytesOffset, numDataBytesInBlock[0]);
        var ecBytes = com.google.zxing.qrcode.encoder.Encoder._generateECBytes(dataBytes, numEcBytesInBlock[0]);
        blocks.add(new com.google.zxing.qrcode.encoder._blockPair(dataBytes, ecBytes));
        maxNumDataBytes = Math.max(maxNumDataBytes, dataBytes.size());
        maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.size());
        dataBytesOffset += numDataBytesInBlock[0];
    }
    if (numDataBytes !== dataBytesOffset) {
        throw new Error('WriterException: Data bytes does not match offset');
    }
    for (var i = 0; i < maxNumDataBytes; ++i) {
        for (var j = 0; j < blocks.length; ++j) {
            var dataBytes = (blocks[j]).get_dataBytes();
            if (i < dataBytes.size()) {
                result.appendBits(dataBytes.at(i), 8);
            }
        }
    }
    for (var i = 0; i < maxNumEcBytes; ++i) {
        for (var j = 0; j < blocks.length; ++j) {
            var ecBytes = (blocks[j]).get_errorCorrectionBytes();
            if (i < ecBytes.size()) {
                result.appendBits(ecBytes.at(i), 8);
            }
        }
    }
    if (numTotalBytes !== result.sizeInBytes()) {
        throw new Error('WriterException: Interleaving error: ' + numTotalBytes + ' and ' + result.sizeInBytes() + ' differ.');
    }
}
com.google.zxing.qrcode.encoder.Encoder._generateECBytes = function com_google_zxing_qrcode_encoder_Encoder$_generateECBytes(dataBytes, numEcBytesInBlock) {
    var numDataBytes = dataBytes.size();
    var toEncode = new Array(numDataBytes + numEcBytesInBlock);
    for (var i = 0; i < numDataBytes; i++) {
        toEncode[i] = dataBytes.at(i);
    }
    new com.google.zxing.common.reedsolomon.ReedSolomonEncoder(com.google.zxing.common.reedsolomon.GF256.qR_CODE_FIELD).encode(toEncode, numEcBytesInBlock);
    var ecBytes = new com.google.zxing.common.ByteArray(numEcBytesInBlock);
    for (var i = 0; i < numEcBytesInBlock; i++) {
        ecBytes.set_Renamed1(i, toEncode[numDataBytes + i]);
    }
    return ecBytes;
}
com.google.zxing.qrcode.encoder.Encoder._appendModeInfo = function com_google_zxing_qrcode_encoder_Encoder$_appendModeInfo(mode, bits) {
    bits.appendBits(mode.get_bits(), 4);
}
com.google.zxing.qrcode.encoder.Encoder._appendLengthInfo = function com_google_zxing_qrcode_encoder_Encoder$_appendLengthInfo(numLetters, version, mode, bits) {
    var numBits = mode.getCharacterCountBits(com.google.zxing.qrcode.decoder.Version.getVersionForNumber(version));
    if (numLetters > ((1 << numBits) - 1)) {
        throw new Error('WriterException: ' + numLetters + 'is bigger than' + ((1 << numBits) - 1));
    }
    bits.appendBits(numLetters, numBits);
}
com.google.zxing.qrcode.encoder.Encoder._appendBytes = function com_google_zxing_qrcode_encoder_Encoder$_appendBytes(content, mode, bits, encoding) {
    if (mode.equals(com.google.zxing.qrcode.decoder.Mode.NUMERIC)) {
        com.google.zxing.qrcode.encoder.Encoder._appendNumericBytes(content, bits);
    }
    else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.ALPHANUMERIC)) {
        com.google.zxing.qrcode.encoder.Encoder._appendAlphanumericBytes(content, bits);
    }
    else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.BYTE)) {
        com.google.zxing.qrcode.encoder.Encoder._append8BitBytes(content, bits, encoding);
    }
    else if (mode.equals(com.google.zxing.qrcode.decoder.Mode.KANJI)) {
        com.google.zxing.qrcode.encoder.Encoder._appendKanjiBytes(content, bits);
    }
    else {
        throw new Error('WriterException: Invalid mode: ' + mode);
    }
}
com.google.zxing.qrcode.encoder.Encoder._appendNumericBytes = function com_google_zxing_qrcode_encoder_Encoder$_appendNumericBytes(content, bits) {
    var length = content.length;
    var i = 0;
    while (i < length) {
        var num1 = content.charCodeAt(i) - SystemExtend.CharExtend.toInt32('0');
        if (i + 2 < length) {
            var num2 = content.charCodeAt(i + 1) - SystemExtend.CharExtend.toInt32('0');
            var num3 = content.charCodeAt(i + 2) - SystemExtend.CharExtend.toInt32('0');
            bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
            i += 3;
        }
        else if (i + 1 < length) {
            var num2 = content.charCodeAt(i + 1) - SystemExtend.CharExtend.toInt32('0');
            bits.appendBits(num1 * 10 + num2, 7);
            i += 2;
        }
        else {
            bits.appendBits(num1, 4);
            i++;
        }
    }
}
com.google.zxing.qrcode.encoder.Encoder._appendAlphanumericBytes = function com_google_zxing_qrcode_encoder_Encoder$_appendAlphanumericBytes(content, bits) {
    var length = content.length;
    var i = 0;
    while (i < length) {
        var code1 = com.google.zxing.qrcode.encoder.Encoder._getAlphanumericCode(content.charCodeAt(i));
        if (code1 === -1) {
            throw new Error('WriterException');
        }
        if (i + 1 < length) {
            var code2 = com.google.zxing.qrcode.encoder.Encoder._getAlphanumericCode(content.charCodeAt(i + 1));
            if (code2 === -1) {
                throw new Error('WriterException');
            }
            bits.appendBits(code1 * 45 + code2, 11);
            i += 2;
        }
        else {
            bits.appendBits(code1, 6);
            i++;
        }
    }
}
com.google.zxing.qrcode.encoder.Encoder._append8BitBytes = function com_google_zxing_qrcode_encoder_Encoder$_append8BitBytes(content, bits, encoding) {
    var bytes;
    try {
        bytes = SupportClass.toSByteArray(SystemExtend.Text.Encoding.getEncoding(encoding).getBytes(content));
    }
    catch (uee) {
        throw new Error('WriterException: ' + uee.toString());
    }
    for (var i = 0; i < bytes.length; ++i) {
        bits.appendBits(bytes[i], 8);
    }
}
com.google.zxing.qrcode.encoder.Encoder._appendKanjiBytes = function com_google_zxing_qrcode_encoder_Encoder$_appendKanjiBytes(content, bits) {
    var bytes;
    try {
        bytes = SupportClass.toSByteArray(SystemExtend.Text.Encoding.getEncoding('Shift_JIS').getBytes(content));
    }
    catch (uee) {
        throw new Error('WriterException: ' + uee.toString());
    }
    var length = bytes.length;
    for (var i = 0; i < length; i += 2) {
        var byte1 = bytes[i] & 255;
        var byte2 = bytes[i + 1] & 255;
        var code = (byte1 << 8) | byte2;
        var subtracted = -1;
        if (code >= 33088 && code <= 40956) {
            subtracted = code - 33088;
        }
        else if (code >= 57408 && code <= 60351) {
            subtracted = code - 49472;
        }
        if (subtracted === -1) {
            throw new Error('WriterException: Invalid byte sequence');
        }
        var encoded = ((subtracted >> 8) * 192) + (subtracted & 255);
        bits.appendBits(encoded, 13);
    }
}
com.google.zxing.qrcode.encoder.Encoder._appendECI = function com_google_zxing_qrcode_encoder_Encoder$_appendECI(eci, bits) {
    bits.appendBits(com.google.zxing.qrcode.decoder.Mode.ECI.get_bits(), 4);
    bits.appendBits(eci.get_value(), 8);
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder.MaskUtil

com.google.zxing.qrcode.encoder.MaskUtil = function com_google_zxing_qrcode_encoder_MaskUtil() {
}
com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule1 = function com_google_zxing_qrcode_encoder_MaskUtil$applyMaskPenaltyRule1(matrix) {
    return com.google.zxing.qrcode.encoder.MaskUtil._applyMaskPenaltyRule1Internal(matrix, true) + com.google.zxing.qrcode.encoder.MaskUtil._applyMaskPenaltyRule1Internal(matrix, false);
}
com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule2 = function com_google_zxing_qrcode_encoder_MaskUtil$applyMaskPenaltyRule2(matrix) {
    var penalty = 0;
    var array = matrix.get_array();
    var width = matrix.get_width();
    var height = matrix.get_height();
    for (var y = 0; y < height - 1; ++y) {
        for (var x = 0; x < width - 1; ++x) {
            var value_Renamed = array[y][x];
            if (value_Renamed === array[y][x + 1] && value_Renamed === array[y + 1][x] && value_Renamed === array[y + 1][x + 1]) {
                penalty += 3;
            }
        }
    }
    return penalty;
}
com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule3 = function com_google_zxing_qrcode_encoder_MaskUtil$applyMaskPenaltyRule3(matrix) {
    var penalty = 0;
    var array = matrix.get_array();
    var width = matrix.get_width();
    var height = matrix.get_height();
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            if (x + 6 < width && array[y][x] === 1 && !array[y][x + 1] && array[y][x + 2] === 1 && array[y][x + 3] === 1 && array[y][x + 4] === 1 && !array[y][x + 5] && array[y][x + 6] === 1 && ((x + 10 < width && !array[y][x + 7] && !array[y][x + 8] && !array[y][x + 9] && !array[y][x + 10]) || (x - 4 >= 0 && !array[y][x - 1] && !array[y][x - 2] && !array[y][x - 3] && !array[y][x - 4]))) {
                penalty += 40;
            }
            if (y + 6 < height && array[y][x] === 1 && !array[y + 1][x] && array[y + 2][x] === 1 && array[y + 3][x] === 1 && array[y + 4][x] === 1 && !array[y + 5][x] && array[y + 6][x] === 1 && ((y + 10 < height && !array[y + 7][x] && !array[y + 8][x] && !array[y + 9][x] && !array[y + 10][x]) || (y - 4 >= 0 && !array[y - 1][x] && !array[y - 2][x] && !array[y - 3][x] && !array[y - 4][x]))) {
                penalty += 40;
            }
        }
    }
    return penalty;
}
com.google.zxing.qrcode.encoder.MaskUtil.applyMaskPenaltyRule4 = function com_google_zxing_qrcode_encoder_MaskUtil$applyMaskPenaltyRule4(matrix) {
    var numDarkCells = 0;
    var array = matrix.get_array();
    var width = matrix.get_width();
    var height = matrix.get_height();
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            if (array[y][x] === 1) {
                numDarkCells += 1;
            }
        }
    }
    var numTotalCells = matrix.get_height() * matrix.get_width();
    var darkRatio = numDarkCells / numTotalCells;
    return Math.floor(Math.abs(Math.floor(darkRatio * 100 - 50)) / 5) * 10;
}
com.google.zxing.qrcode.encoder.MaskUtil.getDataMaskBit = function com_google_zxing_qrcode_encoder_MaskUtil$getDataMaskBit(maskPattern, x, y) {
    if (!com.google.zxing.qrcode.encoder.QRCode.isValidMaskPattern(maskPattern)) {
        throw new Error('ArgumentException: Invalid mask pattern');
    }
    var intermediate, temp;
    switch (maskPattern) {
        case 0:
            intermediate = (y + x) & 1;
            break;
        case 1:
            intermediate = y & 1;
            break;
        case 2:
            intermediate = x % 3;
            break;
        case 3:
            intermediate = (y + x) % 3;
            break;
        case 4:
            intermediate = (SupportClass.urShift1(y, 1) + Math.floor(x / 3)) & 1;
            break;
        case 5:
            temp = y * x;
            intermediate = (temp & 1) + (temp % 3);
            break;
        case 6:
            temp = y * x;
            intermediate = (((temp & 1) + (temp % 3)) & 1);
            break;
        case 7:
            temp = y * x;
            intermediate = (((temp % 3) + ((y + x) & 1)) & 1);
            break;
        default:
            throw new Error('ArgumentException: Invalid mask pattern: ' + maskPattern);
    }
    return !intermediate;
}
com.google.zxing.qrcode.encoder.MaskUtil._applyMaskPenaltyRule1Internal = function com_google_zxing_qrcode_encoder_MaskUtil$_applyMaskPenaltyRule1Internal(matrix, isHorizontal) {
    var penalty = 0;
    var numSameBitCells = 0;
    var prevBit = -1;
    var iLimit = (isHorizontal) ? matrix.get_height() : matrix.get_width();
    var jLimit = (isHorizontal) ? matrix.get_width() : matrix.get_height();
    var array = matrix.get_array();
    for (var i = 0; i < iLimit; ++i) {
        for (var j = 0; j < jLimit; ++j) {
            var bit = (isHorizontal) ? array[i][j] : array[j][i];
            if (bit === prevBit) {
                numSameBitCells += 1;
                if (numSameBitCells === 5) {
                    penalty += 3;
                }
                else if (numSameBitCells > 5) {
                    penalty += 1;
                }
            }
            else {
                numSameBitCells = 1;
                prevBit = bit;
            }
        }
        numSameBitCells = 0;
    }
    return penalty;
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder.MatrixUtil

com.google.zxing.qrcode.encoder.MatrixUtil = function com_google_zxing_qrcode_encoder_MatrixUtil() {
}
com.google.zxing.qrcode.encoder.MatrixUtil.clearMatrix = function com_google_zxing_qrcode_encoder_MatrixUtil$clearMatrix(matrix) {
    matrix.clear((-1));
}
com.google.zxing.qrcode.encoder.MatrixUtil.buildMatrix = function com_google_zxing_qrcode_encoder_MatrixUtil$buildMatrix(dataBits, ecLevel, version, maskPattern, matrix) {
    com.google.zxing.qrcode.encoder.MatrixUtil.clearMatrix(matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil.embedBasicPatterns(version, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil.embedTypeInfo(ecLevel, maskPattern, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil.maybeEmbedVersionInfo(version, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil.embedDataBits(dataBits, maskPattern, matrix);
}
com.google.zxing.qrcode.encoder.MatrixUtil.embedBasicPatterns = function com_google_zxing_qrcode_encoder_MatrixUtil$embedBasicPatterns(version, matrix) {
    com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPatternsAndSeparators(matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedDarkDotAtLeftBottomCorner(matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._maybeEmbedPositionAdjustmentPatterns(version, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedTimingPatterns(matrix);
}
com.google.zxing.qrcode.encoder.MatrixUtil.embedTypeInfo = function com_google_zxing_qrcode_encoder_MatrixUtil$embedTypeInfo(ecLevel, maskPattern, matrix) {
    var typeInfoBits = new com.google.zxing.qrcode.encoder.BitVector();
    com.google.zxing.qrcode.encoder.MatrixUtil.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
    for (var i = 0; i < typeInfoBits.size(); ++i) {
        var bit = typeInfoBits.at(typeInfoBits.size() - 1 - i);
        var x1 = com.google.zxing.qrcode.encoder.MatrixUtil._typE_INFO_COORDINATES[i][0];
        var y1 = com.google.zxing.qrcode.encoder.MatrixUtil._typE_INFO_COORDINATES[i][1];
        matrix.set_Renamed(x1, y1, bit);
        if (i < 8) {
            var x2 = matrix.get_width() - i - 1;
            var y2 = 8;
            matrix.set_Renamed(x2, y2, bit);
        }
        else {
            var x2 = 8;
            var y2 = matrix.get_height() - 7 + (i - 8);
            matrix.set_Renamed(x2, y2, bit);
        }
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil.maybeEmbedVersionInfo = function com_google_zxing_qrcode_encoder_MatrixUtil$maybeEmbedVersionInfo(version, matrix) {
    if (version < 7) {
        return;
    }
    var versionInfoBits = new com.google.zxing.qrcode.encoder.BitVector();
    com.google.zxing.qrcode.encoder.MatrixUtil.makeVersionInfoBits(version, versionInfoBits);
    var bitIndex = 6 * 3 - 1;
    for (var i = 0; i < 6; ++i) {
        for (var j = 0; j < 3; ++j) {
            var bit = versionInfoBits.at(bitIndex);
            bitIndex--;
            matrix.set_Renamed(i, matrix.get_height() - 11 + j, bit);
            matrix.set_Renamed(matrix.get_height() - 11 + j, i, bit);
        }
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil.embedDataBits = function com_google_zxing_qrcode_encoder_MatrixUtil$embedDataBits(dataBits, maskPattern, matrix) {
    var bitIndex = 0;
    var direction = -1;
    var x = matrix.get_width() - 1;
    var y = matrix.get_height() - 1;
    while (x > 0) {
        if (x === 6) {
            x -= 1;
        }
        while (y >= 0 && y < matrix.get_height()) {
            for (var i = 0; i < 2; ++i) {
                var xx = x - i;
                if (!com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(xx, y))) {
                    continue;
                }
                var bit;
                if (bitIndex < dataBits.size()) {
                    bit = dataBits.at(bitIndex);
                    ++bitIndex;
                }
                else {
                    bit = 0;
                }
                if (maskPattern !== -1) {
                    if (com.google.zxing.qrcode.encoder.MaskUtil.getDataMaskBit(maskPattern, xx, y)) {
                        bit ^= 1;
                    }
                }
                matrix.set_Renamed(xx, y, bit);
            }
            y += direction;
        }
        direction = -direction;
        y += direction;
        x -= 2;
    }
    if (bitIndex !== dataBits.size()) {
        throw new Error('WriterException: Not all bits consumed: ' + bitIndex + '/' + dataBits.size());
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil.findMSBSet = function com_google_zxing_qrcode_encoder_MatrixUtil$findMSBSet(value_Renamed) {
    var numDigits = 0;
    while (!!value_Renamed) {
        value_Renamed = SupportClass.urShift1(value_Renamed, 1);
        ++numDigits;
    }
    return numDigits;
}
com.google.zxing.qrcode.encoder.MatrixUtil.calculateBCHCode = function com_google_zxing_qrcode_encoder_MatrixUtil$calculateBCHCode(value_Renamed, poly) {
    var msbSetInPoly = com.google.zxing.qrcode.encoder.MatrixUtil.findMSBSet(poly);
    value_Renamed <<= msbSetInPoly - 1;
    while (com.google.zxing.qrcode.encoder.MatrixUtil.findMSBSet(value_Renamed) >= msbSetInPoly) {
        value_Renamed ^= poly << (com.google.zxing.qrcode.encoder.MatrixUtil.findMSBSet(value_Renamed) - msbSetInPoly);
    }
    return value_Renamed;
}
com.google.zxing.qrcode.encoder.MatrixUtil.makeTypeInfoBits = function com_google_zxing_qrcode_encoder_MatrixUtil$makeTypeInfoBits(ecLevel, maskPattern, bits) {
    if (!com.google.zxing.qrcode.encoder.QRCode.isValidMaskPattern(maskPattern)) {
        throw new Error('WriterException: Invalid mask pattern');
    }
    var typeInfo = (ecLevel.get_bits() << 3) | maskPattern;
    bits.appendBits(typeInfo, 5);
    var bchCode = com.google.zxing.qrcode.encoder.MatrixUtil.calculateBCHCode(typeInfo, 1335);
    bits.appendBits(bchCode, 10);
    var maskBits = new com.google.zxing.qrcode.encoder.BitVector();
    maskBits.appendBits(21522, 15);
    bits.xor(maskBits);
    if (bits.size() !== 15) {
        throw new Error('WriterException: should not happen but we got: ' + bits.size());
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil.makeVersionInfoBits = function com_google_zxing_qrcode_encoder_MatrixUtil$makeVersionInfoBits(version, bits) {
    bits.appendBits(version, 6);
    var bchCode = com.google.zxing.qrcode.encoder.MatrixUtil.calculateBCHCode(version, 7973);
    bits.appendBits(bchCode, 12);
    if (bits.size() !== 18) {
        throw new Error('WriterException: should not happen but we got: ' + bits.size());
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty = function com_google_zxing_qrcode_encoder_MatrixUtil$_isEmpty(value_Renamed) {
    return value_Renamed === -1;
}
com.google.zxing.qrcode.encoder.MatrixUtil._isValidValue = function com_google_zxing_qrcode_encoder_MatrixUtil$_isValidValue(value_Renamed) {
    return (value_Renamed === -1 || !value_Renamed || value_Renamed === 1);
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedTimingPatterns = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedTimingPatterns(matrix) {
    for (var i = 8; i < matrix.get_width() - 8; ++i) {
        var bit = (i + 1) % 2;
        if (!com.google.zxing.qrcode.encoder.MatrixUtil._isValidValue(matrix.get_Renamed(i, 6))) {
            throw new Error('WriterException');
        }
        if (com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(i, 6))) {
            matrix.set_Renamed(i, 6, bit);
        }
        if (!com.google.zxing.qrcode.encoder.MatrixUtil._isValidValue(matrix.get_Renamed(6, i))) {
            throw new Error('WriterException');
        }
        if (com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(6, i))) {
            matrix.set_Renamed(6, i, bit);
        }
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedDarkDotAtLeftBottomCorner = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedDarkDotAtLeftBottomCorner(matrix) {
    if (!matrix.get_Renamed(8, matrix.get_height() - 8)) {
        throw new Error('WriterException');
    }
    matrix.set_Renamed(8, matrix.get_height() - 8, 1);
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedHorizontalSeparationPattern = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedHorizontalSeparationPattern(xStart, yStart, matrix) {
    if (com.google.zxing.qrcode.encoder.MatrixUtil._horizontaL_SEPARATION_PATTERN[0].length !== 8 || com.google.zxing.qrcode.encoder.MatrixUtil._horizontaL_SEPARATION_PATTERN.length !== 1) {
        throw new Error('WriterException: Bad horizontal separation pattern');
    }
    for (var x = 0; x < 8; ++x) {
        if (!com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(xStart + x, yStart))) {
            throw new Error('WriterException');
        }
        matrix.set_Renamed(xStart + x, yStart, com.google.zxing.qrcode.encoder.MatrixUtil._horizontaL_SEPARATION_PATTERN[0][x]);
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedVerticalSeparationPattern = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedVerticalSeparationPattern(xStart, yStart, matrix) {
    if (com.google.zxing.qrcode.encoder.MatrixUtil._verticaL_SEPARATION_PATTERN[0].length !== 1 || com.google.zxing.qrcode.encoder.MatrixUtil._verticaL_SEPARATION_PATTERN.length !== 7) {
        throw new Error('WriterException: Bad vertical separation pattern');
    }
    for (var y = 0; y < 7; ++y) {
        if (!com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(xStart, yStart + y))) {
            throw new Error('WriterException');
        }
        matrix.set_Renamed(xStart, yStart + y, com.google.zxing.qrcode.encoder.MatrixUtil._verticaL_SEPARATION_PATTERN[y][0]);
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionAdjustmentPattern = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedPositionAdjustmentPattern(xStart, yStart, matrix) {
    if (com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN[0].length !== 5 || com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN.length !== 5) {
        throw new Error('WriterException: Bad position adjustment');
    }
    for (var y = 0; y < 5; ++y) {
        for (var x = 0; x < 5; ++x) {
            if (!com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(xStart + x, yStart + y))) {
                throw new Error('WriterException');
            }
            matrix.set_Renamed(xStart + x, yStart + y, com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN[y][x]);
        }
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPattern = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedPositionDetectionPattern(xStart, yStart, matrix) {
    if (com.google.zxing.qrcode.encoder.MatrixUtil._positioN_DETECTION_PATTERN[0].length !== 7 || com.google.zxing.qrcode.encoder.MatrixUtil._positioN_DETECTION_PATTERN.length !== 7) {
        throw new Error('WriterException: Bad position detection pattern');
    }
    for (var y = 0; y < 7; ++y) {
        for (var x = 0; x < 7; ++x) {
            if (!com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(xStart + x, yStart + y))) {
                throw new Error('WriterException');
            }
            matrix.set_Renamed(xStart + x, yStart + y, com.google.zxing.qrcode.encoder.MatrixUtil._positioN_DETECTION_PATTERN[y][x]);
        }
    }
}
com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPatternsAndSeparators = function com_google_zxing_qrcode_encoder_MatrixUtil$_embedPositionDetectionPatternsAndSeparators(matrix) {
    var pdpWidth = com.google.zxing.qrcode.encoder.MatrixUtil._positioN_DETECTION_PATTERN[0].length;
    com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPattern(0, 0, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPattern(matrix.get_width() - pdpWidth, 0, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionDetectionPattern(0, matrix.get_width() - pdpWidth, matrix);
    var hspWidth = com.google.zxing.qrcode.encoder.MatrixUtil._horizontaL_SEPARATION_PATTERN[0].length;
    com.google.zxing.qrcode.encoder.MatrixUtil._embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedHorizontalSeparationPattern(matrix.get_width() - hspWidth, hspWidth - 1, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedHorizontalSeparationPattern(0, matrix.get_width() - hspWidth, matrix);
    var vspSize = com.google.zxing.qrcode.encoder.MatrixUtil._verticaL_SEPARATION_PATTERN.length;
    com.google.zxing.qrcode.encoder.MatrixUtil._embedVerticalSeparationPattern(vspSize, 0, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedVerticalSeparationPattern(matrix.get_height() - vspSize - 1, 0, matrix);
    com.google.zxing.qrcode.encoder.MatrixUtil._embedVerticalSeparationPattern(vspSize, matrix.get_height() - vspSize, matrix);
}
com.google.zxing.qrcode.encoder.MatrixUtil._maybeEmbedPositionAdjustmentPatterns = function com_google_zxing_qrcode_encoder_MatrixUtil$_maybeEmbedPositionAdjustmentPatterns(version, matrix) {
    if (version < 2) {
        return;
    }
    var index = version - 1;
    var coordinates = com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
    var numCoordinates = com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index].length;
    for (var i = 0; i < numCoordinates; ++i) {
        for (var j = 0; j < numCoordinates; ++j) {
            var y = coordinates[i];
            var x = coordinates[j];
            if (x === -1 || y === -1) {
                continue;
            }
            if (com.google.zxing.qrcode.encoder.MatrixUtil._isEmpty(matrix.get_Renamed(x, y))) {
                com.google.zxing.qrcode.encoder.MatrixUtil._embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.encoder.QRCode

com.google.zxing.qrcode.encoder.QRCode = function com_google_zxing_qrcode_encoder_QRCode() {
    this._mode = null;
    this._ecLevel = null;
    this._version = -1;
    this._matrixWidth = -1;
    this._maskPattern = -1;
    this._numTotalBytes = -1;
    this._numDataBytes = -1;
    this._numECBytes = -1;
    this._numRSBlocks = -1;
    this._matrix = null;
}
com.google.zxing.qrcode.encoder.QRCode.isValidMaskPattern = function com_google_zxing_qrcode_encoder_QRCode$isValidMaskPattern(maskPattern) {
    return maskPattern >= 0 && maskPattern < 8;
}
com.google.zxing.qrcode.encoder.QRCode.prototype = {
    
    get_mode: function com_google_zxing_qrcode_encoder_QRCode$get_mode() {
        return this._mode;
    },
    set_mode: function com_google_zxing_qrcode_encoder_QRCode$set_mode(value) {
        this._mode = value;
        return value;
    },
    
    get_ecLevel: function com_google_zxing_qrcode_encoder_QRCode$get_ecLevel() {
        return this._ecLevel;
    },
    set_ecLevel: function com_google_zxing_qrcode_encoder_QRCode$set_ecLevel(value) {
        this._ecLevel = value;
        return value;
    },
    
    get_version: function com_google_zxing_qrcode_encoder_QRCode$get_version() {
        return this._version;
    },
    set_version: function com_google_zxing_qrcode_encoder_QRCode$set_version(value) {
        this._version = value;
        return value;
    },
    
    get_matrixWidth: function com_google_zxing_qrcode_encoder_QRCode$get_matrixWidth() {
        return this._matrixWidth;
    },
    set_matrixWidth: function com_google_zxing_qrcode_encoder_QRCode$set_matrixWidth(value) {
        this._matrixWidth = value;
        return value;
    },
    
    get_maskPattern: function com_google_zxing_qrcode_encoder_QRCode$get_maskPattern() {
        return this._maskPattern;
    },
    set_maskPattern: function com_google_zxing_qrcode_encoder_QRCode$set_maskPattern(value) {
        this._maskPattern = value;
        return value;
    },
    
    get_numTotalBytes: function com_google_zxing_qrcode_encoder_QRCode$get_numTotalBytes() {
        return this._numTotalBytes;
    },
    set_numTotalBytes: function com_google_zxing_qrcode_encoder_QRCode$set_numTotalBytes(value) {
        this._numTotalBytes = value;
        return value;
    },
    
    get_numDataBytes: function com_google_zxing_qrcode_encoder_QRCode$get_numDataBytes() {
        return this._numDataBytes;
    },
    set_numDataBytes: function com_google_zxing_qrcode_encoder_QRCode$set_numDataBytes(value) {
        this._numDataBytes = value;
        return value;
    },
    
    get_numECBytes: function com_google_zxing_qrcode_encoder_QRCode$get_numECBytes() {
        return this._numECBytes;
    },
    set_numECBytes: function com_google_zxing_qrcode_encoder_QRCode$set_numECBytes(value) {
        this._numECBytes = value;
        return value;
    },
    
    get_numRSBlocks: function com_google_zxing_qrcode_encoder_QRCode$get_numRSBlocks() {
        return this._numRSBlocks;
    },
    set_numRSBlocks: function com_google_zxing_qrcode_encoder_QRCode$set_numRSBlocks(value) {
        this._numRSBlocks = value;
        return value;
    },
    
    get_matrix: function com_google_zxing_qrcode_encoder_QRCode$get_matrix() {
        return this._matrix;
    },
    set_matrix: function com_google_zxing_qrcode_encoder_QRCode$set_matrix(value) {
        this._matrix = value;
        return value;
    },
    
    get_valid: function com_google_zxing_qrcode_encoder_QRCode$get_valid() {
        return this._mode != null && this._ecLevel != null && this._version !== -1 && this._matrixWidth !== -1 && this._maskPattern !== -1 && this._numTotalBytes !== -1 && this._numDataBytes !== -1 && this._numECBytes !== -1 && this._numRSBlocks !== -1 && com.google.zxing.qrcode.encoder.QRCode.isValidMaskPattern(this._maskPattern) && this._numTotalBytes === this._numDataBytes + this._numECBytes && this._matrix != null && this._matrixWidth === this._matrix.get_width() && this._matrix.get_width() === this._matrix.get_height();
    },
    
    _mode: null,
    _ecLevel: null,
    _version: 0,
    _matrixWidth: 0,
    _maskPattern: 0,
    _numTotalBytes: 0,
    _numDataBytes: 0,
    _numECBytes: 0,
    _numRSBlocks: 0,
    _matrix: null,
    
    at: function com_google_zxing_qrcode_encoder_QRCode$at(x, y) {
        var value_Renamed = this._matrix.get_Renamed(x, y);
        if (!(!value_Renamed || value_Renamed === 1)) {
            throw new Error('SystemExpection: Bad value');
        }
        return value_Renamed;
    },
    
    toString: function com_google_zxing_qrcode_encoder_QRCode$toString() {
        var result = new ss.StringBuilder();
        result.append('<<\n');
        result.append(' mode: ');
        result.append(this._mode);
        result.append('\n ecLevel: ');
        result.append(this._ecLevel);
        result.append('\n version: ');
        result.append(this._version);
        result.append('\n matrixWidth: ');
        result.append(this._matrixWidth);
        result.append('\n maskPattern: ');
        result.append(this._maskPattern);
        result.append('\n numTotalBytes: ');
        result.append(this._numTotalBytes);
        result.append('\n numDataBytes: ');
        result.append(this._numDataBytes);
        result.append('\n numECBytes: ');
        result.append(this._numECBytes);
        result.append('\n numRSBlocks: ');
        result.append(this._numRSBlocks);
        if (this._matrix == null) {
            result.append('\n matrix: null\n');
        }
        else {
            result.append('\n matrix:\n');
            result.append(this._matrix.toString());
        }
        result.append('>>\n');
        return result.toString();
    }
}


Type.registerNamespace('com.google.zxing.qrcode');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.QRCodeReader

com.google.zxing.qrcode.QRCodeReader = function com_google_zxing_qrcode_QRCodeReader() {
    this._decoder = new com.google.zxing.qrcode.decoder.Decoder();
}
com.google.zxing.qrcode.QRCodeReader._extractPureBits = function com_google_zxing_qrcode_QRCodeReader$_extractPureBits(image) {
    var height = image.get_height();
    var width = image.get_width();
    var minDimension = Math.min(height, width);
    var borderWidth = 0;
    while (borderWidth < minDimension && !image.get_Renamed(borderWidth, borderWidth)) {
        borderWidth++;
    }
    if (borderWidth === minDimension) {
        throw new Error('ReaderException');
    }
    var moduleEnd = borderWidth;
    while (moduleEnd < minDimension && image.get_Renamed(moduleEnd, moduleEnd)) {
        moduleEnd++;
    }
    if (moduleEnd === minDimension) {
        throw new Error('ReaderException');
    }
    var moduleSize = moduleEnd - borderWidth;
    var rowEndOfSymbol = width - 1;
    while (rowEndOfSymbol >= 0 && !image.get_Renamed(rowEndOfSymbol, borderWidth)) {
        rowEndOfSymbol--;
    }
    if (rowEndOfSymbol < 0) {
        throw new Error('ReaderException');
    }
    rowEndOfSymbol++;
    if (!!((rowEndOfSymbol - borderWidth) % moduleSize)) {
        throw new Error('ReaderException');
    }
    var dimension = Math.floor((rowEndOfSymbol - borderWidth) / moduleSize);
    borderWidth += (moduleSize >> 1);
    var sampleDimension = borderWidth + (dimension - 1) * moduleSize;
    if (sampleDimension >= width || sampleDimension >= height) {
        throw new Error('ReaderException');
    }
    var bits = com.google.zxing.common.BitMatrix.createSquareInstance(dimension);
    for (var i = 0; i < dimension; i++) {
        var iOffset = borderWidth + i * moduleSize;
        for (var j = 0; j < dimension; j++) {
            if (image.get_Renamed(borderWidth + j * moduleSize, iOffset)) {
                bits.set_Renamed(j, i);
            }
        }
    }
    return bits;
}
com.google.zxing.qrcode.QRCodeReader.prototype = {
    
    get_decoder: function com_google_zxing_qrcode_QRCodeReader$get_decoder() {
        return this._decoder;
    },
    
    decode1: function com_google_zxing_qrcode_QRCodeReader$decode1(image) {
        return this.decode2(image, null);
    },
    
    decode2: function com_google_zxing_qrcode_QRCodeReader$decode2(image, hints) {
        var decoderResult;
        var points;
        if (hints != null && Object.keyExists(hints, com.google.zxing.DecodeHintType.purE_BARCODE)) {
            var bits = com.google.zxing.qrcode.QRCodeReader._extractPureBits(image.get_blackMatrix());
            decoderResult = this._decoder.decode2(bits);
            points = com.google.zxing.qrcode.QRCodeReader._nO_POINTS;
        }
        else {
            var detectorResult = new com.google.zxing.qrcode.detector.Detector(image.get_blackMatrix()).detect2(hints);
            decoderResult = this._decoder.decode2(detectorResult.get_bits());
            points = detectorResult.get_points();
        }
        var result = new com.google.zxing.Result(decoderResult.get_text(), decoderResult.get_rawBytes(), points, com.google.zxing.BarcodeFormat.qR_CODE);
        if (decoderResult.get_byteSegments() != null) {
            result.putMetadata(com.google.zxing.ResultMetadataType.bytE_SEGMENTS, decoderResult.get_byteSegments());
        }
        if (decoderResult.get_ecLevel() != null) {
            result.putMetadata(com.google.zxing.ResultMetadataType.erroR_CORRECTION_LEVEL, decoderResult.get_ecLevel().toString());
        }
        return result;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.qrcode.QRCodeWriter

com.google.zxing.qrcode.QRCodeWriter = function com_google_zxing_qrcode_QRCodeWriter() {
}
com.google.zxing.qrcode.QRCodeWriter._renderResult = function com_google_zxing_qrcode_QRCodeWriter$_renderResult(code, width, height) {
    var input = code.get_matrix();
    var inputWidth = input.get_width();
    var inputHeight = input.get_height();
    var qrWidth = inputWidth + (4 << 1);
    var qrHeight = inputHeight + (4 << 1);
    var outputWidth = Math.max(width, qrWidth);
    var outputHeight = Math.max(height, qrHeight);
    var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
    var leftPadding = Math.floor((outputWidth - (inputWidth * multiple)) / 2);
    var topPadding = Math.floor((outputHeight - (inputHeight * multiple)) / 2);
    var output = new com.google.zxing.common.ByteMatrix(outputWidth, outputHeight);
    var outputArray = output.get_array();
    var row = new Array(outputWidth);
    for (var y = 0; y < topPadding; y++) {
        com.google.zxing.qrcode.QRCodeWriter._setRowColor(outputArray[y], SupportClass.identity1(255));
    }
    var inputArray = input.get_array();
    for (var y = 0; y < inputHeight; y++) {
        for (var x = 0; x < leftPadding; x++) {
            row[x] = SupportClass.identity1(255);
        }
        var offset = leftPadding;
        for (var x = 0; x < inputWidth; x++) {
            var value_Renamed = ((inputArray[y][x] === 1) ? 0 : SupportClass.identity1(255));
            for (var z = 0; z < multiple; z++) {
                row[offset + z] = value_Renamed;
            }
            offset += multiple;
        }
        offset = leftPadding + (inputWidth * multiple);
        for (var x = offset; x < outputWidth; x++) {
            row[x] = SupportClass.identity1(255);
        }
        offset = topPadding + (y * multiple);
        for (var z = 0; z < multiple; z++) {
            SystemExtend.ArrayExtend.copy(row, 0, outputArray[offset + z], 0, outputWidth);
        }
    }
    var offset2 = topPadding + (inputHeight * multiple);
    for (var y = offset2; y < outputHeight; y++) {
        com.google.zxing.qrcode.QRCodeWriter._setRowColor(outputArray[y], SupportClass.identity1(255));
    }
    return output;
}
com.google.zxing.qrcode.QRCodeWriter._setRowColor = function com_google_zxing_qrcode_QRCodeWriter$_setRowColor(row, value_Renamed) {
    for (var x = 0; x < row.length; x++) {
        row[x] = value_Renamed;
    }
}
com.google.zxing.qrcode.QRCodeWriter.prototype = {
    
    encode: function com_google_zxing_qrcode_QRCodeWriter$encode(contents, format, width, height) {
        return this.encode1(contents, format, width, height, null);
    },
    
    encode1: function com_google_zxing_qrcode_QRCodeWriter$encode1(contents, format, width, height, hints) {
        if (contents == null || !contents.length) {
            throw new Error('ArgumentException: Found empty contents');
        }
        if (format !== com.google.zxing.BarcodeFormat.qR_CODE) {
            throw new Error('ArgumentException: Can only encode QR_CODE, but got ' + format);
        }
        if (width < 0 || height < 0) {
            throw new Error('ArgumentException: Requested dimensions are too small: ' + width + 'x' + height);
        }
        var errorCorrectionLevel = com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.l;
        if (hints != null) {
            var requestedECLevel = hints[com.google.zxing.EncodeHintType.erroR_CORRECTION];
            if (requestedECLevel != null) {
                errorCorrectionLevel = requestedECLevel;
            }
        }
        var code = new com.google.zxing.qrcode.encoder.QRCode();
        com.google.zxing.qrcode.encoder.Encoder.encode2(contents, errorCorrectionLevel, hints, code);
        return com.google.zxing.qrcode.QRCodeWriter._renderResult(code, width, height);
    }
}


Type.registerNamespace('com.google.zxing');

////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.Reader

com.google.zxing.Reader = function() { };
com.google.zxing.Reader.prototype = {
    decode1 : null,
    decode2 : null
}
com.google.zxing.Reader.registerInterface('com.google.zxing.Reader');


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.ResultPointCallback

com.google.zxing.ResultPointCallback = function() { };
com.google.zxing.ResultPointCallback.prototype = {
    foundPossibleResultPoint : null
}
com.google.zxing.ResultPointCallback.registerInterface('com.google.zxing.ResultPointCallback');


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.Writer

com.google.zxing.Writer = function() { };
com.google.zxing.Writer.prototype = {
    encode : null,
    encode1 : null
}
com.google.zxing.Writer.registerInterface('com.google.zxing.Writer');


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.Result

com.google.zxing.Result = function com_google_zxing_Result(text, rawBytes, resultPoints, format) {
    if (text == null && rawBytes == null) {
        throw new Error('ArgumentException: Text and bytes are null');
    }
    this._text = text;
    this._rawBytes = rawBytes;
    this._resultPoints = resultPoints;
    this._format = format;
    this._resultMetadata = null;
}
com.google.zxing.Result.prototype = {
    
    get_text: function com_google_zxing_Result$get_text() {
        return this._text;
    },
    
    get_rawBytes: function com_google_zxing_Result$get_rawBytes() {
        return this._rawBytes;
    },
    
    get_resultPoints: function com_google_zxing_Result$get_resultPoints() {
        return this._resultPoints;
    },
    
    get_barcodeFormat: function com_google_zxing_Result$get_barcodeFormat() {
        return this._format;
    },
    
    get_resultMetadata: function com_google_zxing_Result$get_resultMetadata() {
        return this._resultMetadata;
    },
    
    _text: null,
    _rawBytes: null,
    _resultPoints: null,
    _format: null,
    _resultMetadata: null,
    
    putMetadata: function com_google_zxing_Result$putMetadata(type, value_Renamed) {
        if (this._resultMetadata == null) {
            this._resultMetadata = {};
        }
        this._resultMetadata[type] = value_Renamed;
    },
    
    toString: function com_google_zxing_Result$toString() {
        if (this._text == null) {
            return '[' + this._rawBytes.length + ' bytes]';
        }
        else {
            return this._text;
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.ResultMetadataType

com.google.zxing.ResultMetadataType = function com_google_zxing_ResultMetadataType() {
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.ResultPoint

com.google.zxing.ResultPoint = function com_google_zxing_ResultPoint(x, y) {
    this._x = x;
    this._y = y;
}
com.google.zxing.ResultPoint.orderBestPatterns = function com_google_zxing_ResultPoint$orderBestPatterns(patterns) {
    var zeroOneDistance = com.google.zxing.ResultPoint.distance(patterns[0], patterns[1]);
    var oneTwoDistance = com.google.zxing.ResultPoint.distance(patterns[1], patterns[2]);
    var zeroTwoDistance = com.google.zxing.ResultPoint.distance(patterns[0], patterns[2]);
    var pointA, pointB, pointC;
    if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
        pointB = patterns[0];
        pointA = patterns[1];
        pointC = patterns[2];
    }
    else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
        pointB = patterns[1];
        pointA = patterns[0];
        pointC = patterns[2];
    }
    else {
        pointB = patterns[2];
        pointA = patterns[0];
        pointC = patterns[1];
    }
    if (com.google.zxing.ResultPoint._crossProductZ(pointA, pointB, pointC) < 0) {
        var temp = pointA;
        pointA = pointC;
        pointC = temp;
    }
    patterns[0] = pointA;
    patterns[1] = pointB;
    patterns[2] = pointC;
}
com.google.zxing.ResultPoint.distance = function com_google_zxing_ResultPoint$distance(pattern1, pattern2) {
    var xDiff = pattern1.get_x() - pattern2.get_x();
    var yDiff = pattern1.get_y() - pattern2.get_y();
    return Math.sqrt((xDiff * xDiff + yDiff * yDiff));
}
com.google.zxing.ResultPoint._crossProductZ = function com_google_zxing_ResultPoint$_crossProductZ(pointA, pointB, pointC) {
    var bX = pointB._x;
    var bY = pointB._y;
    return ((pointC._x - bX) * (pointA._y - bY)) - ((pointC._y - bY) * (pointA._x - bX));
}
com.google.zxing.ResultPoint.prototype = {
    
    get_x: function com_google_zxing_ResultPoint$get_x() {
        return this._x;
    },
    
    get_y: function com_google_zxing_ResultPoint$get_y() {
        return this._y;
    },
    
    _x: 0,
    _y: 0,
    
    equals: function com_google_zxing_ResultPoint$equals(other) {
        if (Type.canCast(other, com.google.zxing.ResultPoint)) {
            var otherPoint = other;
            return this._x === otherPoint._x && this._y === otherPoint._y;
        }
        return false;
    },
    
    getHashCode: function com_google_zxing_ResultPoint$getHashCode() {
        return 0;
    },
    
    toString: function com_google_zxing_ResultPoint$toString() {
        var result = new ss.StringBuilder();
        result.append('(');
        result.append(this._x);
        result.append(',');
        result.append(this._y);
        result.append(')');
        return result.toString();
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.BarcodeFormat

com.google.zxing.BarcodeFormat = function com_google_zxing_BarcodeFormat(name) {
    this._name = name;
    com.google.zxing.BarcodeFormat._VALUES[name] = this;
}
com.google.zxing.BarcodeFormat.valueOf = function com_google_zxing_BarcodeFormat$valueOf(name) {
    var format = com.google.zxing.BarcodeFormat._VALUES[name];
    if (format == null) {
        throw new Error('ArgumentException');
    }
    return format;
}
com.google.zxing.BarcodeFormat.prototype = {
    
    get_name: function com_google_zxing_BarcodeFormat$get_name() {
        return this._name;
    },
    
    _name: null,
    
    toString: function com_google_zxing_BarcodeFormat$toString() {
        return this._name;
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.Binarizer

com.google.zxing.Binarizer = function com_google_zxing_Binarizer(source) {
    if (source == null) {
        throw new Error('Source must be non-null.');
    }
    this._source = source;
}
com.google.zxing.Binarizer.prototype = {
    
    get_luminanceSource: function com_google_zxing_Binarizer$get_luminanceSource() {
        return this._source;
    },
    
    _source: null
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.BinaryBitmap

com.google.zxing.BinaryBitmap = function com_google_zxing_BinaryBitmap(binarizer) {
    if (binarizer == null) {
        throw new Error('Binarizer must be non-null.');
    }
    this._binarizer = binarizer;
    this._matrix = null;
}
com.google.zxing.BinaryBitmap.prototype = {
    
    get_width: function com_google_zxing_BinaryBitmap$get_width() {
        return this._binarizer.get_luminanceSource().get_width();
    },
    
    get_height: function com_google_zxing_BinaryBitmap$get_height() {
        return this._binarizer.get_luminanceSource().get_height();
    },
    
    get_blackMatrix: function com_google_zxing_BinaryBitmap$get_blackMatrix() {
        if (this._matrix == null) {
            this._matrix = this._binarizer.get_blackMatrix();
        }
        return this._matrix;
    },
    
    get_cropSupported: function com_google_zxing_BinaryBitmap$get_cropSupported() {
        return this._binarizer.get_luminanceSource().get_cropSupported();
    },
    
    get_rotateSupported: function com_google_zxing_BinaryBitmap$get_rotateSupported() {
        return this._binarizer.get_luminanceSource().get_rotateSupported();
    },
    
    _binarizer: null,
    _matrix: null,
    
    getBlackRow: function com_google_zxing_BinaryBitmap$getBlackRow(y, row) {
        return this._binarizer.getBlackRow(y, row);
    },
    
    crop: function com_google_zxing_BinaryBitmap$crop(left, top, width, height) {
        var newSource = this._binarizer.get_luminanceSource().crop(left, top, width, height);
        return new com.google.zxing.BinaryBitmap(this._binarizer.createBinarizer(newSource));
    },
    
    rotateCounterClockwise: function com_google_zxing_BinaryBitmap$rotateCounterClockwise() {
        var newSource = this._binarizer.get_luminanceSource().rotateCounterClockwise();
        return new com.google.zxing.BinaryBitmap(this._binarizer.createBinarizer(newSource));
    }
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.DecodeHintType

com.google.zxing.DecodeHintType = function com_google_zxing_DecodeHintType() {
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.EncodeHintType

com.google.zxing.EncodeHintType = function com_google_zxing_EncodeHintType() {
}


////////////////////////////////////////////////////////////////////////////////
// com.google.zxing.LuminanceSource

com.google.zxing.LuminanceSource = function com_google_zxing_LuminanceSource(width, height) {
    this._width = width;
    this._height = height;
}
com.google.zxing.LuminanceSource.prototype = {
    
    get_width: function com_google_zxing_LuminanceSource$get_width() {
        return this._width;
    },
    
    get_height: function com_google_zxing_LuminanceSource$get_height() {
        return this._height;
    },
    
    get_cropSupported: function com_google_zxing_LuminanceSource$get_cropSupported() {
        return false;
    },
    
    get_rotateSupported: function com_google_zxing_LuminanceSource$get_rotateSupported() {
        return false;
    },
    
    _width: 0,
    _height: 0,
    
    crop: function com_google_zxing_LuminanceSource$crop(left, top, width, height) {
        throw new Error('SystemExpection: This luminance source does not support cropping.');
    },
    
    rotateCounterClockwise: function com_google_zxing_LuminanceSource$rotateCounterClockwise() {
        throw new Error('SystemExpection: This luminance source does not support rotation.');
    }
}


Type.registerNamespace('SystemExtend');

////////////////////////////////////////////////////////////////////////////////
// SystemExtend.ArrayExtend

SystemExtend.ArrayExtend = function SystemExtend_ArrayExtend() {
}
SystemExtend.ArrayExtend.copy = function SystemExtend_ArrayExtend$copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.CharExtend

SystemExtend.CharExtend = function SystemExtend_CharExtend() {
}
SystemExtend.CharExtend.isDigit = function SystemExtend_CharExtend$isDigit(val) {
    try {
        var n = Number.parse(val);
        return !isNaN(n);
    }
    catch ($e1) {
        return false;
    }
}
SystemExtend.CharExtend.toInt32 = function SystemExtend_CharExtend$toInt32(val) {
    return (val).charCodeAt(0);
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Int32Extend

SystemExtend.Int32Extend = function SystemExtend_Int32Extend() {
}
SystemExtend.Int32Extend.toChar = function SystemExtend_Int32Extend$toChar(val) {
    return String.fromCharCode([ val ]).charAt(0);
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.SingleExtend

SystemExtend.SingleExtend = function SystemExtend_SingleExtend() {
}
SystemExtend.SingleExtend.isNaN = function SystemExtend_SingleExtend$isNaN(val) {
    return isNaN(val);
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.StringExtend

SystemExtend.StringExtend = function SystemExtend_StringExtend() {
}
SystemExtend.StringExtend.toCharArray = function SystemExtend_StringExtend$toCharArray(val) {
    var list = new Array(val.length);
    for (var i = 0; i < val.length; i++) {
        list[i] = val.charAt(i);
    }
    return list;
}


Type.registerNamespace('SystemExtend.Drawing');

////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Bitmap

SystemExtend.Drawing.Bitmap = function SystemExtend_Drawing_Bitmap(width, height, pixelFormat) {
    this._width = width;
    this._height = height;
    this._pixelFormat = pixelFormat;
    if (pixelFormat === 1) {
        this._data = new Array(width * height * 1);
    }
    else {
        throw new Error('ArgumentException');
    }
}
SystemExtend.Drawing.Bitmap.prototype = {
    _data: null,
    _pixelFormat: 0,
    _width: 0,
    _height: 0,
    
    get_pixelFormat: function SystemExtend_Drawing_Bitmap$get_pixelFormat() {
        return this._pixelFormat;
    },
    set_pixelFormat: function SystemExtend_Drawing_Bitmap$set_pixelFormat(value) {
        this._pixelFormat = value;
        return value;
    },
    
    get_width: function SystemExtend_Drawing_Bitmap$get_width() {
        return this._width;
    },
    set_width: function SystemExtend_Drawing_Bitmap$set_width(value) {
        this._width = value;
        return value;
    },
    
    get_height: function SystemExtend_Drawing_Bitmap$get_height() {
        return this._height;
    },
    set_height: function SystemExtend_Drawing_Bitmap$set_height(value) {
        this._height = value;
        return value;
    },
    
    lockBits: function SystemExtend_Drawing_Bitmap$lockBits(rect, flags, format) {
        return new SystemExtend.Drawing.Imaging.BitmapData(this._data);
    },
    
    unlockBits: function SystemExtend_Drawing_Bitmap$unlockBits(bmpData) {
    },
    
    getPixel: function SystemExtend_Drawing_Bitmap$getPixel(x, y) {
        return null;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Color

SystemExtend.Drawing.Color = function SystemExtend_Drawing_Color() {
}
SystemExtend.Drawing.Color.prototype = {
    _r: 0,
    
    get_r: function SystemExtend_Drawing_Color$get_r() {
        return this._r;
    },
    set_r: function SystemExtend_Drawing_Color$set_r(value) {
        this._r = value;
        return value;
    },
    
    _g: 0,
    
    get_g: function SystemExtend_Drawing_Color$get_g() {
        return this._g;
    },
    set_g: function SystemExtend_Drawing_Color$set_g(value) {
        this._g = value;
        return value;
    },
    
    _b: 0,
    
    get_b: function SystemExtend_Drawing_Color$get_b() {
        return this._b;
    },
    set_b: function SystemExtend_Drawing_Color$set_b(value) {
        this._b = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Rectangle

SystemExtend.Drawing.Rectangle = function SystemExtend_Drawing_Rectangle(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
}
SystemExtend.Drawing.Rectangle.prototype = {
    _x: 0,
    _y: 0,
    _width: 0,
    _height: 0,
    
    get_width: function SystemExtend_Drawing_Rectangle$get_width() {
        return this._width;
    },
    set_width: function SystemExtend_Drawing_Rectangle$set_width(value) {
        this._width = value;
        return value;
    },
    
    get_height: function SystemExtend_Drawing_Rectangle$get_height() {
        return this._height;
    },
    set_height: function SystemExtend_Drawing_Rectangle$set_height(value) {
        this._height = value;
        return value;
    }
}


Type.registerNamespace('SystemExtend.Drawing.Imaging');

////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Imaging.ImageLockMode

SystemExtend.Drawing.Imaging.ImageLockMode = function() { };
SystemExtend.Drawing.Imaging.ImageLockMode.prototype = {
    readOnly: 1, 
    readWrite: 2, 
    userInputBuffer: 3, 
    writeOnly: 4
}
SystemExtend.Drawing.Imaging.ImageLockMode.registerEnum('SystemExtend.Drawing.Imaging.ImageLockMode', false);


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Imaging.PixelFormat

SystemExtend.Drawing.Imaging.PixelFormat = function() { };
SystemExtend.Drawing.Imaging.PixelFormat.prototype = {
    format8bppIndexed: 1
}
SystemExtend.Drawing.Imaging.PixelFormat.registerEnum('SystemExtend.Drawing.Imaging.PixelFormat', false);


////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Drawing.Imaging.BitmapData

SystemExtend.Drawing.Imaging.BitmapData = function SystemExtend_Drawing_Imaging_BitmapData(data) {
    this._data = data;
}
SystemExtend.Drawing.Imaging.BitmapData.prototype = {
    _data: null,
    
    get_scan0: function SystemExtend_Drawing_Imaging_BitmapData$get_scan0() {
        return this._data;
    },
    set_scan0: function SystemExtend_Drawing_Imaging_BitmapData$set_scan0(value) {
        this._data = value;
        return value;
    }
}


Type.registerNamespace('SystemExtend.Text');

////////////////////////////////////////////////////////////////////////////////
// SystemExtend.Text.Encoding

SystemExtend.Text.Encoding = function SystemExtend_Text_Encoding(name) {
    this._name = name;
}
SystemExtend.Text.Encoding.getEncoding = function SystemExtend_Text_Encoding$getEncoding(name) {
    return new SystemExtend.Text.Encoding('utf-8');
}
SystemExtend.Text.Encoding.prototype = {
    _name: null,
    
    getString: function SystemExtend_Text_Encoding$getString(bytes) {
        if (bytes == null) {
            return null;
        }
        var result = new ss.StringBuilder();
        for (var i = 0; i < bytes.length; i++) {
            var b = bytes[i];
            if (b <= 127) {
                result.append(String.fromCharCode(b));
            }
            else if (b <= 223) {
                var c = ((b & 31) << 6);
                i++;
                c += bytes[i] & 63;
                result.append(String.fromCharCode(c));
            }
            else if (b <= 224) {
                i++;
                var c = ((bytes[i] & 31) << 6) | 2048;
                i++;
                c += bytes[i] & 63;
                result.append(String.fromCharCode(c));
            }
            else {
                var c = ((b & 15) << 12);
                i++;
                c += (bytes[i] & 63) << 6;
                i++;
                c += bytes[i] & 63;
                result.append(String.fromCharCode(c));
            }
        }
        return result.toString();
    },
    
    getBytes: function SystemExtend_Text_Encoding$getBytes(s) {
        var result = [];
        if (s == null) {
            return null;
        }
        for (var i = 0; i < s.length; i++) {
            var c = s.charCodeAt(i);
            if (c <= 127) {
                result.add(c);
            }
            else if (c <= 2047) {
                result.add((((c >> 6) & 31) | 192));
                result.add(((c & 63) | 128));
            }
            else {
                result.add((((c >> 12) & 15) | 224));
                result.add((((c >> 6) & 63) | 128));
                result.add(((c & 63) | 128));
            }
        }
        var byteArr = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
            byteArr[i] = result[i];
        }
        return byteArr;
    }
}


com.google.zxing.LuminanceSource.registerClass('com.google.zxing.LuminanceSource');
RGBLuminanceSource.registerClass('RGBLuminanceSource', com.google.zxing.LuminanceSource);
SupportClass.registerClass('SupportClass');
com.google.zxing.client.result.ResultParser.registerClass('com.google.zxing.client.result.ResultParser');
com.google.zxing.client.result._abstractDoCoMoResultParser.registerClass('com.google.zxing.client.result._abstractDoCoMoResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._addressBookAUResultParser.registerClass('com.google.zxing.client.result._addressBookAUResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._addressBookDoCoMoResultParser.registerClass('com.google.zxing.client.result._addressBookDoCoMoResultParser', com.google.zxing.client.result._abstractDoCoMoResultParser);
com.google.zxing.client.result.ParsedResult.registerClass('com.google.zxing.client.result.ParsedResult');
com.google.zxing.client.result.AddressBookParsedResult.registerClass('com.google.zxing.client.result.AddressBookParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._bizcardResultParser.registerClass('com.google.zxing.client.result._bizcardResultParser', com.google.zxing.client.result._abstractDoCoMoResultParser);
com.google.zxing.client.result._bookmarkDoCoMoResultParser.registerClass('com.google.zxing.client.result._bookmarkDoCoMoResultParser', com.google.zxing.client.result._abstractDoCoMoResultParser);
com.google.zxing.client.result.CalendarParsedResult.registerClass('com.google.zxing.client.result.CalendarParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result.EmailAddressParsedResult.registerClass('com.google.zxing.client.result.EmailAddressParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._emailAddressResultParser.registerClass('com.google.zxing.client.result._emailAddressResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._emailDoCoMoResultParser.registerClass('com.google.zxing.client.result._emailDoCoMoResultParser', com.google.zxing.client.result._abstractDoCoMoResultParser);
com.google.zxing.client.result.GeoParsedResult.registerClass('com.google.zxing.client.result.GeoParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._geoResultParser.registerClass('com.google.zxing.client.result._geoResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.ISBNParsedResult.registerClass('com.google.zxing.client.result.ISBNParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result.ISBNResultParser.registerClass('com.google.zxing.client.result.ISBNResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.ParsedResultType.registerClass('com.google.zxing.client.result.ParsedResultType');
com.google.zxing.client.result.ProductParsedResult.registerClass('com.google.zxing.client.result.ProductParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._productResultParser.registerClass('com.google.zxing.client.result._productResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._smsmmsResultParser.registerClass('com.google.zxing.client.result._smsmmsResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.SMSParsedResult.registerClass('com.google.zxing.client.result.SMSParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result.TelParsedResult.registerClass('com.google.zxing.client.result.TelParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._telResultParser.registerClass('com.google.zxing.client.result._telResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.TextParsedResult.registerClass('com.google.zxing.client.result.TextParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result.URIParsedResult.registerClass('com.google.zxing.client.result.URIParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result._uriResultParser.registerClass('com.google.zxing.client.result._uriResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._urltoResultParser.registerClass('com.google.zxing.client.result._urltoResultParser');
com.google.zxing.client.result._vCardResultParser.registerClass('com.google.zxing.client.result._vCardResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result._vEventResultParser.registerClass('com.google.zxing.client.result._vEventResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.optional._abstractNDEFResultParser.registerClass('com.google.zxing.client.result.optional._abstractNDEFResultParser', com.google.zxing.client.result.ResultParser);
com.google.zxing.client.result.optional._ndefRecord.registerClass('com.google.zxing.client.result.optional._ndefRecord');
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.registerClass('com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult', com.google.zxing.client.result.ParsedResult);
com.google.zxing.client.result.optional._ndefSmartPosterResultParser.registerClass('com.google.zxing.client.result.optional._ndefSmartPosterResultParser', com.google.zxing.client.result.optional._abstractNDEFResultParser);
com.google.zxing.client.result.optional._ndefTextResultParser.registerClass('com.google.zxing.client.result.optional._ndefTextResultParser', com.google.zxing.client.result.optional._abstractNDEFResultParser);
com.google.zxing.client.result.optional._ndefuriResultParser.registerClass('com.google.zxing.client.result.optional._ndefuriResultParser', com.google.zxing.client.result.optional._abstractNDEFResultParser);
com.google.zxing.common.BitArray.registerClass('com.google.zxing.common.BitArray');
com.google.zxing.common.BitMatrix.registerClass('com.google.zxing.common.BitMatrix');
com.google.zxing.common.BitSource.registerClass('com.google.zxing.common.BitSource');
com.google.zxing.common.ByteArray.registerClass('com.google.zxing.common.ByteArray');
com.google.zxing.common.ByteMatrix.registerClass('com.google.zxing.common.ByteMatrix');
com.google.zxing.common.ECI.registerClass('com.google.zxing.common.ECI');
com.google.zxing.common.CharacterSetECI.registerClass('com.google.zxing.common.CharacterSetECI', com.google.zxing.common.ECI);
com.google.zxing.common.Collections.registerClass('com.google.zxing.common.Collections');
com.google.zxing.common.DecoderResult.registerClass('com.google.zxing.common.DecoderResult');
com.google.zxing.common.GridSampler.registerClass('com.google.zxing.common.GridSampler');
com.google.zxing.common.DefaultGridSampler.registerClass('com.google.zxing.common.DefaultGridSampler', com.google.zxing.common.GridSampler);
com.google.zxing.common.DetectorResult.registerClass('com.google.zxing.common.DetectorResult');
com.google.zxing.Binarizer.registerClass('com.google.zxing.Binarizer');
com.google.zxing.common.GlobalHistogramBinarizer.registerClass('com.google.zxing.common.GlobalHistogramBinarizer', com.google.zxing.Binarizer);
com.google.zxing.common.HybridBinarizer.registerClass('com.google.zxing.common.HybridBinarizer', com.google.zxing.common.GlobalHistogramBinarizer);
com.google.zxing.common.PerspectiveTransform.registerClass('com.google.zxing.common.PerspectiveTransform');
com.google.zxing.common.detector.MonochromeRectangleDetector.registerClass('com.google.zxing.common.detector.MonochromeRectangleDetector');
com.google.zxing.common.reedsolomon.GF256.registerClass('com.google.zxing.common.reedsolomon.GF256');
com.google.zxing.common.reedsolomon._gF256Poly.registerClass('com.google.zxing.common.reedsolomon._gF256Poly');
com.google.zxing.common.reedsolomon.ReedSolomonDecoder.registerClass('com.google.zxing.common.reedsolomon.ReedSolomonDecoder');
com.google.zxing.common.reedsolomon.ReedSolomonEncoder.registerClass('com.google.zxing.common.reedsolomon.ReedSolomonEncoder');
com.google.zxing.oned.OneDReader.registerClass('com.google.zxing.oned.OneDReader', null, com.google.zxing.Reader);
com.google.zxing.oned.UPCEANReader.registerClass('com.google.zxing.oned.UPCEANReader', com.google.zxing.oned.OneDReader);
com.google.zxing.oned.UPCEReader.registerClass('com.google.zxing.oned.UPCEReader', com.google.zxing.oned.UPCEANReader);
com.google.zxing.qrcode.decoder._bitMatrixParser.registerClass('com.google.zxing.qrcode.decoder._bitMatrixParser');
com.google.zxing.qrcode.decoder._dataBlock.registerClass('com.google.zxing.qrcode.decoder._dataBlock');
com.google.zxing.qrcode.decoder._dataMask.registerClass('com.google.zxing.qrcode.decoder._dataMask');
com.google.zxing.qrcode.decoder._dataMask000.registerClass('com.google.zxing.qrcode.decoder._dataMask000', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask001.registerClass('com.google.zxing.qrcode.decoder._dataMask001', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask010.registerClass('com.google.zxing.qrcode.decoder._dataMask010', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask011.registerClass('com.google.zxing.qrcode.decoder._dataMask011', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask100.registerClass('com.google.zxing.qrcode.decoder._dataMask100', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask101.registerClass('com.google.zxing.qrcode.decoder._dataMask101', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask110.registerClass('com.google.zxing.qrcode.decoder._dataMask110', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._dataMask111.registerClass('com.google.zxing.qrcode.decoder._dataMask111', com.google.zxing.qrcode.decoder._dataMask);
com.google.zxing.qrcode.decoder._decodedBitStreamParser.registerClass('com.google.zxing.qrcode.decoder._decodedBitStreamParser');
com.google.zxing.qrcode.decoder.Decoder.registerClass('com.google.zxing.qrcode.decoder.Decoder');
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.registerClass('com.google.zxing.qrcode.decoder.ErrorCorrectionLevel');
com.google.zxing.qrcode.decoder._formatInformation.registerClass('com.google.zxing.qrcode.decoder._formatInformation');
com.google.zxing.qrcode.decoder.Mode.registerClass('com.google.zxing.qrcode.decoder.Mode');
com.google.zxing.qrcode.decoder.Version.registerClass('com.google.zxing.qrcode.decoder.Version');
com.google.zxing.qrcode.decoder.ECBlocks.registerClass('com.google.zxing.qrcode.decoder.ECBlocks');
com.google.zxing.qrcode.decoder.ECB.registerClass('com.google.zxing.qrcode.decoder.ECB');
com.google.zxing.ResultPoint.registerClass('com.google.zxing.ResultPoint');
com.google.zxing.qrcode.detector.AlignmentPattern.registerClass('com.google.zxing.qrcode.detector.AlignmentPattern', com.google.zxing.ResultPoint);
com.google.zxing.qrcode.detector._alignmentPatternFinder.registerClass('com.google.zxing.qrcode.detector._alignmentPatternFinder');
com.google.zxing.qrcode.detector.Detector.registerClass('com.google.zxing.qrcode.detector.Detector');
com.google.zxing.qrcode.detector.FinderPattern.registerClass('com.google.zxing.qrcode.detector.FinderPattern', com.google.zxing.ResultPoint);
com.google.zxing.qrcode.detector.FinderPatternFinder.registerClass('com.google.zxing.qrcode.detector.FinderPatternFinder');
com.google.zxing.qrcode.detector._centerComparator.registerClass('com.google.zxing.qrcode.detector._centerComparator', null, com.google.zxing.common.Comparator);
com.google.zxing.qrcode.detector.FinderPatternInfo.registerClass('com.google.zxing.qrcode.detector.FinderPatternInfo');
com.google.zxing.qrcode.encoder.BitVector.registerClass('com.google.zxing.qrcode.encoder.BitVector');
com.google.zxing.qrcode.encoder._blockPair.registerClass('com.google.zxing.qrcode.encoder._blockPair');
com.google.zxing.qrcode.encoder.Encoder.registerClass('com.google.zxing.qrcode.encoder.Encoder');
com.google.zxing.qrcode.encoder.MaskUtil.registerClass('com.google.zxing.qrcode.encoder.MaskUtil');
com.google.zxing.qrcode.encoder.MatrixUtil.registerClass('com.google.zxing.qrcode.encoder.MatrixUtil');
com.google.zxing.qrcode.encoder.QRCode.registerClass('com.google.zxing.qrcode.encoder.QRCode');
com.google.zxing.qrcode.QRCodeReader.registerClass('com.google.zxing.qrcode.QRCodeReader', null, com.google.zxing.Reader);
com.google.zxing.qrcode.QRCodeWriter.registerClass('com.google.zxing.qrcode.QRCodeWriter', null, com.google.zxing.Writer);
com.google.zxing.Result.registerClass('com.google.zxing.Result');
com.google.zxing.ResultMetadataType.registerClass('com.google.zxing.ResultMetadataType');
com.google.zxing.BarcodeFormat.registerClass('com.google.zxing.BarcodeFormat');
com.google.zxing.BinaryBitmap.registerClass('com.google.zxing.BinaryBitmap');
com.google.zxing.DecodeHintType.registerClass('com.google.zxing.DecodeHintType');
com.google.zxing.EncodeHintType.registerClass('com.google.zxing.EncodeHintType');
SystemExtend.ArrayExtend.registerClass('SystemExtend.ArrayExtend');
SystemExtend.CharExtend.registerClass('SystemExtend.CharExtend');
SystemExtend.Int32Extend.registerClass('SystemExtend.Int32Extend');
SystemExtend.SingleExtend.registerClass('SystemExtend.SingleExtend');
SystemExtend.StringExtend.registerClass('SystemExtend.StringExtend');
SystemExtend.Drawing.Bitmap.registerClass('SystemExtend.Drawing.Bitmap');
SystemExtend.Drawing.Color.registerClass('SystemExtend.Drawing.Color');
SystemExtend.Drawing.Rectangle.registerClass('SystemExtend.Drawing.Rectangle');
SystemExtend.Drawing.Imaging.BitmapData.registerClass('SystemExtend.Drawing.Imaging.BitmapData');
SystemExtend.Text.Encoding.registerClass('SystemExtend.Text.Encoding');
com.google.zxing.client.result._emailDoCoMoResultParser._atexT_SYMBOLS$2 = [ '@', '.', '!', '#', '$', '%', '&', "'", '*', '+', '-', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~' ];
com.google.zxing.client.result.ParsedResultType.ADDRESSBOOK = new com.google.zxing.client.result.ParsedResultType('ADDRESSBOOK');
com.google.zxing.client.result.ParsedResultType.emaiL_ADDRESS = new com.google.zxing.client.result.ParsedResultType('EMAIL_ADDRESS');
com.google.zxing.client.result.ParsedResultType.PRODUCT = new com.google.zxing.client.result.ParsedResultType('PRODUCT');
com.google.zxing.client.result.ParsedResultType.URI = new com.google.zxing.client.result.ParsedResultType('URI');
com.google.zxing.client.result.ParsedResultType.TEXT = new com.google.zxing.client.result.ParsedResultType('TEXT');
com.google.zxing.client.result.ParsedResultType.androiD_INTENT = new com.google.zxing.client.result.ParsedResultType('ANDROID_INTENT');
com.google.zxing.client.result.ParsedResultType.GEO = new com.google.zxing.client.result.ParsedResultType('GEO');
com.google.zxing.client.result.ParsedResultType.TEL = new com.google.zxing.client.result.ParsedResultType('TEL');
com.google.zxing.client.result.ParsedResultType.SMS = new com.google.zxing.client.result.ParsedResultType('SMS');
com.google.zxing.client.result.ParsedResultType.CALENDAR = new com.google.zxing.client.result.ParsedResultType('CALENDAR');
com.google.zxing.client.result.ParsedResultType.ndeF_SMART_POSTER = new com.google.zxing.client.result.ParsedResultType('NDEF_SMART_POSTER');
com.google.zxing.client.result.ParsedResultType.mobiletaG_RICH_WEB = new com.google.zxing.client.result.ParsedResultType('MOBILETAG_RICH_WEB');
com.google.zxing.client.result.ParsedResultType.ISBN = new com.google.zxing.client.result.ParsedResultType('ISBN');
com.google.zxing.client.result.optional._ndefRecord.texT_WELL_KNOWN_TYPE = 'T';
com.google.zxing.client.result.optional._ndefRecord.urI_WELL_KNOWN_TYPE = 'U';
com.google.zxing.client.result.optional._ndefRecord.smarT_POSTER_WELL_KNOWN_TYPE = 'Sp';
com.google.zxing.client.result.optional._ndefRecord.actioN_WELL_KNOWN_TYPE = 'act';
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.actioN_UNSPECIFIED = -1;
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.actioN_DO = 0;
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.actioN_SAVE = 1;
com.google.zxing.client.result.optional.NDEFSmartPosterParsedResult.actioN_OPEN = 2;
com.google.zxing.client.result.optional._ndefuriResultParser._urI_PREFIXES$2 = [ null, 'http://www.', 'https://www.', 'http://', 'https://', 'tel:', 'mailto:', 'ftp://anonymous:anonymous@', 'ftp://ftp.', 'ftps://', 'sftp://', 'smb://', 'nfs://', 'ftp://', 'dav://', 'news:', 'telnet://', 'imap:', 'rtsp://', 'urn:', 'pop:', 'sip:', 'sips:', 'tftp:', 'btspp://', 'btl2cap://', 'btgoep://', 'tcpobex://', 'irdaobex://', 'file://', 'urn:epc:id:', 'urn:epc:tag:', 'urn:epc:pat:', 'urn:epc:raw:', 'urn:epc:', 'urn:nfc:' ];
com.google.zxing.common.CharacterSetECI._valuE_TO_ECI$1 = null;
com.google.zxing.common.CharacterSetECI._namE_TO_ECI$1 = null;
com.google.zxing.common.GlobalHistogramBinarizer._luminancE_SHIFT$1 = 8 - 5;
com.google.zxing.common.GlobalHistogramBinarizer._luminancE_BUCKETS$1 = 1 << 5;
com.google.zxing.common.GridSampler._gridSampler = new com.google.zxing.common.DefaultGridSampler();
com.google.zxing.common.reedsolomon.GF256.qR_CODE_FIELD = new com.google.zxing.common.reedsolomon.GF256(285);
com.google.zxing.common.reedsolomon.GF256.datA_MATRIX_FIELD = new com.google.zxing.common.reedsolomon.GF256(301);
com.google.zxing.oned.OneDReader._patterN_MATCH_RESULT_SCALE_FACTOR = 1 << 8;
com.google.zxing.oned.UPCEANReader._maX_AVG_VARIANCE$1 = Math.floor(com.google.zxing.oned.OneDReader._patterN_MATCH_RESULT_SCALE_FACTOR * 0.42);
com.google.zxing.oned.UPCEANReader._maX_INDIVIDUAL_VARIANCE$1 = Math.floor(com.google.zxing.oned.OneDReader._patterN_MATCH_RESULT_SCALE_FACTOR * 0.7);
com.google.zxing.oned.UPCEANReader._starT_END_PATTERN = [ 1, 1, 1 ];
com.google.zxing.oned.UPCEANReader._middlE_PATTERN = [ 1, 1, 1, 1, 1 ];
com.google.zxing.oned.UPCEANReader._l_PATTERNS = [ [ 3, 2, 1, 1 ], [ 2, 2, 2, 1 ], [ 2, 1, 2, 2 ], [ 1, 4, 1, 1 ], [ 1, 1, 3, 2 ], [ 1, 2, 3, 1 ], [ 1, 1, 1, 4 ], [ 1, 3, 1, 2 ], [ 1, 2, 1, 3 ], [ 3, 1, 1, 2 ] ];
com.google.zxing.oned.UPCEANReader._l_AND_G_PATTERNS = null;
(function () {
    com.google.zxing.oned.UPCEANReader._l_AND_G_PATTERNS = new Array(20);
    for (var i = 0; i < 10; i++) {
        com.google.zxing.oned.UPCEANReader._l_AND_G_PATTERNS[i] = com.google.zxing.oned.UPCEANReader._l_PATTERNS[i];
    }
    for (var i = 10; i < 20; i++) {
        var widths = com.google.zxing.oned.UPCEANReader._l_PATTERNS[i - 10];
        var reversedWidths = new Array(widths.length);
        for (var j = 0; j < widths.length; j++) {
            reversedWidths[j] = widths[widths.length - j - 1];
        }
        com.google.zxing.oned.UPCEANReader._l_AND_G_PATTERNS[i] = reversedWidths;
    }
})();
com.google.zxing.oned.UPCEReader._middlE_END_PATTERN$2 = [ 1, 1, 1, 1, 1, 1 ];
com.google.zxing.oned.UPCEReader._numsyS_AND_CHECK_DIGIT_PATTERNS$2 = [ [ 56, 52, 50, 49, 44, 38, 35, 42, 41, 37 ], [ 7, 11, 13, 14, 19, 25, 28, 21, 22, 26 ] ];
com.google.zxing.qrcode.decoder._dataMask._datA_MASKS = [ new com.google.zxing.qrcode.decoder._dataMask000(), new com.google.zxing.qrcode.decoder._dataMask001(), new com.google.zxing.qrcode.decoder._dataMask010(), new com.google.zxing.qrcode.decoder._dataMask011(), new com.google.zxing.qrcode.decoder._dataMask100(), new com.google.zxing.qrcode.decoder._dataMask101(), new com.google.zxing.qrcode.decoder._dataMask110(), new com.google.zxing.qrcode.decoder._dataMask111() ];
com.google.zxing.qrcode.decoder._decodedBitStreamParser._alphanumeriC_CHARS = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':' ];
com.google.zxing.qrcode.decoder._decodedBitStreamParser._assumE_SHIFT_JIS = false;
(function () {
    com.google.zxing.qrcode.decoder._decodedBitStreamParser._assumE_SHIFT_JIS = false;
})();
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.l = new com.google.zxing.qrcode.decoder.ErrorCorrectionLevel(0, 1, 'L');
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.m = new com.google.zxing.qrcode.decoder.ErrorCorrectionLevel(1, 0, 'M');
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.q = new com.google.zxing.qrcode.decoder.ErrorCorrectionLevel(2, 3, 'Q');
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.h = new com.google.zxing.qrcode.decoder.ErrorCorrectionLevel(3, 2, 'H');
com.google.zxing.qrcode.decoder.ErrorCorrectionLevel._foR_BITS = [ com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.m, com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.l, com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.h, com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.q ];
com.google.zxing.qrcode.decoder._formatInformation._formaT_INFO_DECODE_LOOKUP = [ [ 21522, 0 ], [ 20773, 1 ], [ 24188, 2 ], [ 23371, 3 ], [ 17913, 4 ], [ 16590, 5 ], [ 20375, 6 ], [ 19104, 7 ], [ 30660, 8 ], [ 29427, 9 ], [ 32170, 10 ], [ 30877, 11 ], [ 26159, 12 ], [ 25368, 13 ], [ 27713, 14 ], [ 26998, 15 ], [ 5769, 16 ], [ 5054, 17 ], [ 7399, 18 ], [ 6608, 19 ], [ 1890, 20 ], [ 597, 21 ], [ 3340, 22 ], [ 2107, 23 ], [ 13663, 24 ], [ 12392, 25 ], [ 16177, 26 ], [ 14854, 27 ], [ 9396, 28 ], [ 8579, 29 ], [ 11994, 30 ], [ 11245, 31 ] ];
com.google.zxing.qrcode.decoder._formatInformation._bitS_SET_IN_HALF_BYTE = [ 0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4 ];
com.google.zxing.qrcode.decoder.Mode.TERMINATOR = new com.google.zxing.qrcode.decoder.Mode([ 0, 0, 0 ], 0, 'TERMINATOR');
com.google.zxing.qrcode.decoder.Mode.NUMERIC = new com.google.zxing.qrcode.decoder.Mode([ 10, 12, 14 ], 1, 'NUMERIC');
com.google.zxing.qrcode.decoder.Mode.ALPHANUMERIC = new com.google.zxing.qrcode.decoder.Mode([ 9, 11, 13 ], 2, 'ALPHANUMERIC');
com.google.zxing.qrcode.decoder.Mode.structureD_APPEND = new com.google.zxing.qrcode.decoder.Mode([ 0, 0, 0 ], 3, 'STRUCTURED_APPEND');
com.google.zxing.qrcode.decoder.Mode.BYTE = new com.google.zxing.qrcode.decoder.Mode([ 8, 16, 16 ], 4, 'BYTE');
com.google.zxing.qrcode.decoder.Mode.ECI = new com.google.zxing.qrcode.decoder.Mode(null, 7, 'ECI');
com.google.zxing.qrcode.decoder.Mode.KANJI = new com.google.zxing.qrcode.decoder.Mode([ 8, 10, 12 ], 8, 'KANJI');
com.google.zxing.qrcode.decoder.Mode.fnC1_FIRST_POSITION = new com.google.zxing.qrcode.decoder.Mode(null, 5, 'FNC1_FIRST_POSITION');
com.google.zxing.qrcode.decoder.Mode.fnC1_SECOND_POSITION = new com.google.zxing.qrcode.decoder.Mode(null, 9, 'FNC1_SECOND_POSITION');
com.google.zxing.qrcode.decoder.Version._versioN_DECODE_INFO = [ 31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017 ];
com.google.zxing.qrcode.decoder.Version._VERSIONS = com.google.zxing.qrcode.decoder.Version._buildVersions();
com.google.zxing.qrcode.detector.FinderPatternFinder.miN_SKIP = 3;
com.google.zxing.qrcode.detector.FinderPatternFinder.maX_MODULES = 57;
com.google.zxing.qrcode.encoder.Encoder._alphanumeriC_TABLE = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1 ];
com.google.zxing.qrcode.encoder.MatrixUtil._positioN_DETECTION_PATTERN = [ [ 1, 1, 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 1 ], [ 1, 0, 1, 1, 1, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1, 1, 1 ] ];
com.google.zxing.qrcode.encoder.MatrixUtil._horizontaL_SEPARATION_PATTERN = [ [ 0, 0, 0, 0, 0, 0, 0, 0 ] ];
com.google.zxing.qrcode.encoder.MatrixUtil._verticaL_SEPARATION_PATTERN = [ [ 0 ], [ 0 ], [ 0 ], [ 0 ], [ 0 ], [ 0 ], [ 0 ] ];
com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN = [ [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ] ];
com.google.zxing.qrcode.encoder.MatrixUtil._positioN_ADJUSTMENT_PATTERN_COORDINATE_TABLE = [ [ -1, -1, -1, -1, -1, -1, -1 ], [ 6, 18, -1, -1, -1, -1, -1 ], [ 6, 22, -1, -1, -1, -1, -1 ], [ 6, 26, -1, -1, -1, -1, -1 ], [ 6, 30, -1, -1, -1, -1, -1 ], [ 6, 34, -1, -1, -1, -1, -1 ], [ 6, 22, 38, -1, -1, -1, -1 ], [ 6, 24, 42, -1, -1, -1, -1 ], [ 6, 26, 46, -1, -1, -1, -1 ], [ 6, 28, 50, -1, -1, -1, -1 ], [ 6, 30, 54, -1, -1, -1, -1 ], [ 6, 32, 58, -1, -1, -1, -1 ], [ 6, 34, 62, -1, -1, -1, -1 ], [ 6, 26, 46, 66, -1, -1, -1 ], [ 6, 26, 48, 70, -1, -1, -1 ], [ 6, 26, 50, 74, -1, -1, -1 ], [ 6, 30, 54, 78, -1, -1, -1 ], [ 6, 30, 56, 82, -1, -1, -1 ], [ 6, 30, 58, 86, -1, -1, -1 ], [ 6, 34, 62, 90, -1, -1, -1 ], [ 6, 28, 50, 72, 94, -1, -1 ], [ 6, 26, 50, 74, 98, -1, -1 ], [ 6, 30, 54, 78, 102, -1, -1 ], [ 6, 28, 54, 80, 106, -1, -1 ], [ 6, 32, 58, 84, 110, -1, -1 ], [ 6, 30, 58, 86, 114, -1, -1 ], [ 6, 34, 62, 90, 118, -1, -1 ], [ 6, 26, 50, 74, 98, 122, -1 ], [ 6, 30, 54, 78, 102, 126, -1 ], [ 6, 26, 52, 78, 104, 130, -1 ], [ 6, 30, 56, 82, 108, 134, -1 ], [ 6, 34, 60, 86, 112, 138, -1 ], [ 6, 30, 58, 86, 114, 142, -1 ], [ 6, 34, 62, 90, 118, 146, -1 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ];
com.google.zxing.qrcode.encoder.MatrixUtil._typE_INFO_COORDINATES = [ [ 8, 0 ], [ 8, 1 ], [ 8, 2 ], [ 8, 3 ], [ 8, 4 ], [ 8, 5 ], [ 8, 7 ], [ 8, 8 ], [ 7, 8 ], [ 5, 8 ], [ 4, 8 ], [ 3, 8 ], [ 2, 8 ], [ 1, 8 ], [ 0, 8 ] ];
com.google.zxing.qrcode.encoder.QRCode.nuM_MASK_PATTERNS = 8;
com.google.zxing.qrcode.QRCodeReader._nO_POINTS = new Array(0);
com.google.zxing.ResultMetadataType.OTHER = new com.google.zxing.ResultMetadataType();
com.google.zxing.ResultMetadataType.ORIENTATION = new com.google.zxing.ResultMetadataType();
com.google.zxing.ResultMetadataType.bytE_SEGMENTS = new com.google.zxing.ResultMetadataType();
com.google.zxing.ResultMetadataType.erroR_CORRECTION_LEVEL = new com.google.zxing.ResultMetadataType();
com.google.zxing.BarcodeFormat._VALUES = {};
com.google.zxing.BarcodeFormat.qR_CODE = new com.google.zxing.BarcodeFormat('QR_CODE');
com.google.zxing.BarcodeFormat.DATAMATRIX = new com.google.zxing.BarcodeFormat('DATAMATRIX');
com.google.zxing.BarcodeFormat.upC_E = new com.google.zxing.BarcodeFormat('UPC_E');
com.google.zxing.BarcodeFormat.upC_A = new com.google.zxing.BarcodeFormat('UPC_A');
com.google.zxing.BarcodeFormat.eaN_8 = new com.google.zxing.BarcodeFormat('EAN_8');
com.google.zxing.BarcodeFormat.eaN_13 = new com.google.zxing.BarcodeFormat('EAN_13');
com.google.zxing.BarcodeFormat.codE_128 = new com.google.zxing.BarcodeFormat('CODE_128');
com.google.zxing.BarcodeFormat.codE_39 = new com.google.zxing.BarcodeFormat('CODE_39');
com.google.zxing.BarcodeFormat.ITF = new com.google.zxing.BarcodeFormat('ITF');
com.google.zxing.BarcodeFormat.pdF417 = new com.google.zxing.BarcodeFormat('PDF417');
com.google.zxing.DecodeHintType.OTHER = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.purE_BARCODE = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.possiblE_FORMATS = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.trY_HARDER = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.alloweD_LENGTHS = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.assumE_CODE_39_CHECK_DIGIT = new com.google.zxing.DecodeHintType();
com.google.zxing.DecodeHintType.neeD_RESULT_POINT_CALLBACK = new com.google.zxing.DecodeHintType();
com.google.zxing.EncodeHintType.erroR_CORRECTION = new com.google.zxing.EncodeHintType();
com.google.zxing.EncodeHintType.characteR_SET = new com.google.zxing.EncodeHintType();
SystemExtend.Int32Extend.maxValue = Number.MAX_VALUE;
SystemExtend.SingleExtend.naN = Number.NaN;
})();

//! This script was generated using Script# v0.7.4.0
