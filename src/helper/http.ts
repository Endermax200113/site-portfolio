export enum ErrorsClient {
	BAD_REQUEST = 400,
	UNAUTHORIZED,
	PAYMENT_REQUIRED,
	FORBIDDEN,
	NOT_FOUND,
	METHOD_NOT_ALLOWED,
	NOT_ACCEPTABLE,
	PROXY_AUTHENTICATION_REQUIRED,
	REQUEST_TIMEOUT,
	CONFLICT,
	GONE,
	LENGTH_REQUIRED,
	PRECONDITION_FAILED,
	PAYLOAD_TOO_LARGE,
	REQUEST_URI_TOO_LONG,
	UNSUPPORTED_MEDIA_TYPE,
	REQUEST_RANGE_NOT_SATISFIABLE,
	EXPECTATION_FAILED,
	IM_A_TEAPOT,
	PAGE_EXPIRED,
	ENHANCE_YOUR_CALM,
	MISDIRECTED_REQUEST,
	UNPROCESSABLE_ENTITY,
	LOCKED,
	FAILED_DEPENDENCY,
	TOO_EARLY,
	UPGRADE_REQUIRED,
	PRECONDITION_REQUIRED = 428,
	TOO_MANY_REQUESTS,
	REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
	NO_RESPONSE = 444,
	BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450,
	UNAVAILABLE_FOR_LEGAL_REASONS,
	SSL_CERTIFICATE_ERROR = 495,
	SSL_CERTIFICATE_REQUIRED,
	HTTP_REQUEST_SENT_TO_HTTPS_PORT,
	TOKEN_EXPIRED_OR_INVALID,
	CLIENT_CLOSED_REQUEST,
}
