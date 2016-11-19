"use strict";
(function (RuleErrorCode) {
    RuleErrorCode[RuleErrorCode["ADOperationFailure"] = 0] = "ADOperationFailure";
    RuleErrorCode[RuleErrorCode["ConnectedAccountNotFound"] = 1] = "ConnectedAccountNotFound";
    RuleErrorCode[RuleErrorCode["CreateWithRuleId"] = 2] = "CreateWithRuleId";
    RuleErrorCode[RuleErrorCode["EmptyValueFound"] = 3] = "EmptyValueFound";
    RuleErrorCode[RuleErrorCode["DuplicatedPriority"] = 4] = "DuplicatedPriority";
    RuleErrorCode[RuleErrorCode["DuplicatedOperationOnTheSameRule"] = 5] = "DuplicatedOperationOnTheSameRule";
    RuleErrorCode[RuleErrorCode["FolderDoesNotExist"] = 6] = "FolderDoesNotExist";
    RuleErrorCode[RuleErrorCode["InvalidAddress"] = 7] = "InvalidAddress";
    RuleErrorCode[RuleErrorCode["InvalidDateRange"] = 8] = "InvalidDateRange";
    RuleErrorCode[RuleErrorCode["InvalidFolderId"] = 9] = "InvalidFolderId";
    RuleErrorCode[RuleErrorCode["InvalidSizeRange"] = 10] = "InvalidSizeRange";
    RuleErrorCode[RuleErrorCode["InvalidValue"] = 11] = "InvalidValue";
    RuleErrorCode[RuleErrorCode["MessageClassificationNotFound"] = 12] = "MessageClassificationNotFound";
    RuleErrorCode[RuleErrorCode["MissingAction"] = 13] = "MissingAction";
    RuleErrorCode[RuleErrorCode["MissingParameter"] = 14] = "MissingParameter";
    RuleErrorCode[RuleErrorCode["MissingRangeValue"] = 15] = "MissingRangeValue";
    RuleErrorCode[RuleErrorCode["NotSettable"] = 16] = "NotSettable";
    RuleErrorCode[RuleErrorCode["RecipientDoesNotExist"] = 17] = "RecipientDoesNotExist";
    RuleErrorCode[RuleErrorCode["RuleNotFound"] = 18] = "RuleNotFound";
    RuleErrorCode[RuleErrorCode["SizeLessThanZero"] = 19] = "SizeLessThanZero";
    RuleErrorCode[RuleErrorCode["StringValueTooBig"] = 20] = "StringValueTooBig";
    RuleErrorCode[RuleErrorCode["UnsupportedAddress"] = 21] = "UnsupportedAddress";
    RuleErrorCode[RuleErrorCode["UnexpectedError"] = 22] = "UnexpectedError";
    RuleErrorCode[RuleErrorCode["UnsupportedRule"] = 23] = "UnsupportedRule";
})(exports.RuleErrorCode || (exports.RuleErrorCode = {}));
var RuleErrorCode = exports.RuleErrorCode;