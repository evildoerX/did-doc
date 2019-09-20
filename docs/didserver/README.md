# DID String 设计
## 术语
### DID String(did)
去中心化身份标识符
### did-url
基于去中心化身份标识符的去中心化资源标识
### did
不包含参数的身份标识字符串
### method
did method 在中台的方法名称
### did-appid
中台的App_id，以"|"分割，自定义字段
### did-service
中台service_key，以";"分割，自定义字段
### did-path
DID标准："/"分割
### did-query
DID标准："?"分割
### did-fragment 
DID标准："#" 分割， 

## DID String Format
``` js
// DID Spec:  https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme
// URI Spec:  https://tools.ietf.org/html/rfc3986
// ABNF Spec: https://tools.ietf.org/html/rfc5234

did-url     = did [ "/" did-path ] [ "#" did-fragment ] ["?" did-query] [";" did-service] ["!" idg-service] ["$" idg-appid]

did               = "did:" method ":" specific-idstring

method            = 1*methodchar
methodchar        = %x61-7A / DIGIT ; 61-7A is a-z in US-ASCII

specific-idstring = idstring *( ":" idstring )
idstring          = 1*idchar
idchar            = ALPHA / DIGIT / "." / "-"

// did-path is identical to a URI path and MUST conform to the ABNF of the path-rootless ABNF rule in [RFC3986].
// https://tools.ietf.org/html/rfc3986#section-3.3

did-path          = segment-nz *( "/" segment )

// did-fragment is identical to a URI fragment and MUST conform to the ABNF of the fragment ABNF rule in [RFC3986]
// https://tools.ietf.org/html/rfc3986#section-3.5

did-fragment      = *( pchar / "/" )

// did-query is identical to a URI query and MUST conform to the ABNF of the path-rootless ABNF rule in [RFC3986].

did-query         = *(pchar / "?")

// did-service Used to get did document service item and MUST conform to the ABNF of the path-rootless ABNF rule in [RFC3986].
did-service         = *(pchar / ";")

// idg-service Used to get did document dig service item and MUST conform to the ABNF of the path-rootless ABNF rule in [RFC3986].
idg-service         = *(pchar / "!")

// idg-appid Used to get did document dig appid item and MUST conform to the ABNF of the path-rootless ABNF rule in [RFC3986].
idg-appid         = *(pchar / "$")

segment           = *pchar
segment-nz        = 1*pchar

pchar             = unreserved / pct-encoded

unreserved        = ALPHA / DIGIT / "-" / "." / "_" / "~"

pct-encoded       = "%" HEXDIG HEXDIG

// https://tools.ietf.org/html/rfc5234
// ALPHA           =  %x41-5A / %x61-7A
// HEXDIG          =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
// DIGIT           =  %x30-39

// http://www.columbia.edu/kermit/ascii.html
// 41-5A is big letters A-Z in US-ASCII
// 61-7A is small letters a-z in US-ASCII
// 30-39 is digits 0-9 in US-ASCII
```

## DID Document
```json
{
  "@context": "https://w3id.org/future-method/v1",
  "id": "did:idg:123456789abcdefghi",

  "publicKey": [{
    "id": "did:idg:123456789abcdefghi#keys-1",
    "type": "RsaVerificationKey2018",
    "controller": "did:idg:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }, {
    "id": "did:idg:123456789abcdefghi#keys-3",
    "type": "Ieee2410VerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }],

  "authentication": [
    // this mechanism can be used to authenticate as did:...fghi
    "did:idg:123456789abcdefghi#keys-1",
    // this mechanism can be used to biometrically authenticate as did:...fghi
    "did:idg:123456789abcdefghi#keys-3",
    // this mechanism is *only* authorized for authentication, it may not
    // be used for any other proof purpose, so its full description is
    // embedded here rather than using only a reference
    {
      "id": "did:idg:123456789abcdefghi#keys-2",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }
  ],

  "service": [{
    "id": "did:example:123456789abcdefghi#oidc",
    "type": "OpenIdConnectVersion1.0Service",
    "serviceEndpoint": "https://openid.example.com/"
  }, {
    "id": "did:example:123456789abcdefghi#vcStore",
    "type": "CredentialRepositoryService",
    "serviceEndpoint": "https://repository.example.com/service/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#xdi？ddd=xxx",
    "type": "XdiService",
    "serviceEndpoint": "https://xdi.example.com/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#hub",
    "type": "HubService",
    "serviceEndpoint": "https://hub.example.com/.identity/did:example:0123456789abcdef/"
  }, {
    "id": "did:example:123456789abcdefghi#messaging",
    "type": "MessagingService",
    "serviceEndpoint": "https://example.com/messages/8377464"
  }, {
    "type": "SocialWebInboxService",
    "id": "did:example:123456789abcdefghi#inbox",
    "serviceEndpoint": "https://social.example.com/83hfh37dj",
    "description": "My public social inbox",
    "spamCost": {
      "amount": "0.50",
      "currency": "USD"
    }
  }, {
    "type": "DidAuthPushModeVersion1",
    "id": "did:example:123456789abcdefghi#push",
    "serviceEndpoint": "http://auth.example.com/did:example:123456789abcdefghi"
  }, {
    "id": "did:example:123456789abcdefghi#bops",
    "type": "BopsService",
    "serviceEndpoint": "https://bops.example.com/enterprise/"
  }]
}
```