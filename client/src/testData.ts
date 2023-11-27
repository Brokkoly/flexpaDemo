export const testEOBJSON = {
    "resourceType": "Bundle",
    "type": "searchset",
    "entry": [
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/0058e899-2085-526d-bf3f-369dfdf543b0",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2020-09-24T01:16:19-04:00",
                    "start": "2020-09-17T01:16:19-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2020-09-17T01:16:19-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R79",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "0058e899-2085-526d-bf3f-369dfdf543b0",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA39365"
                    },
                    {
                        "value": "2ec85e96-2e7f-58d4-9ee7-ef2285be745b",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/2bcaf00a-0cb0-5cc8-b7c7-ec84146ead38"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2020-09-17T01:16:19-04:00",
                            "start": "2020-09-17T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 617.35
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3086.75
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3086.75
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2020-09-17T01:16:19-04:00",
                            "start": "2020-09-17T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.357Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "83a921d1-e838-4775-8435-28d727e2bd28",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/2ec85e96-2e7f-58d4-9ee7-ef2285be745b",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2469.4
                    }
                },
                "procedure": [
                    {
                        "date": "2020-09-17T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2020-09-17T01:16:19-04:00",
                            "start": "2020-09-17T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2020-09-17"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3227.65
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 158.3825000000001
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 218.3825000000001
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3009.2675
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 60
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/077416e7-6d05-5099-a51a-01cc9ca95b41",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2021-07-29T01:15:00-04:00",
                    "start": "2021-07-22T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2021-07-22T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R72",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R72",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "HARTFORD HOSPITAL",
                    "reference": "Location/4a4a2012-31f8-5d15-8255-6b0215ea3c8d"
                },
                "id": "077416e7-6d05-5099-a51a-01cc9ca95b41",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36713"
                    },
                    {
                        "value": "0de95cde-a2c4-bdcc-b61f-e46dec98c838",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/a540798b-9173-5e48-93cb-2c5e8c34214a"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 27.200000000000003
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 136
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 136
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 44.400000000000006
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 222
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 222
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 3,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 4,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 5,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 6,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 7,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            3
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 8,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 9,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 10,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            4
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 11,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 12,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 13,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            5
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 14,
                        "servicedPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.283Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "0932bf97-543f-4974-b748-1a2deb702296",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/0de95cde-a2c4-bdcc-b61f-e46dec98c838",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2948.216000000001
                    }
                },
                "procedure": [
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 3,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 4,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 5,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2021-07-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 6,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2021-07-22T01:15:00-04:00",
                            "start": "2021-07-22T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2021-07-22"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 1021.77
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 48.08850000000001
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 108.08850000000001
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 913.6814999999999
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 60
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/0c1e306d-374a-5634-a57f-466e6f9fc4eb",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2019-03-28T01:18:31-04:00",
                    "start": "2019-03-21T01:18:31-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2019-03-21T01:18:31-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R72",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "0c1e306d-374a-5634-a57f-466e6f9fc4eb",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36448"
                    },
                    {
                        "value": "4a2fa6f1-39ee-b0e4-391b-8880ffed44a8",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/e9a0ab0d-2ff3-52b0-b7d0-8c478ec73933"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2019-03-21T01:18:31-04:00",
                            "start": "2019-03-21T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 677.504
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3387.52
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3387.52
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2019-03-21T01:18:31-04:00",
                            "start": "2019-03-21T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.518Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "33c45bce-8b0d-4996-b08e-23bcaeee2658",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/4a2fa6f1-39ee-b0e4-391b-8880ffed44a8",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2710.016
                    }
                },
                "procedure": [
                    {
                        "date": "2019-03-21T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2019-03-21T01:18:31-04:00",
                            "start": "2019-03-21T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2019-03-21"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3528.42
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3528.42
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/0fc0f1ba-2f2e-56b1-a6b9-5371999318a3",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-12-27T00:16:16-05:00",
                    "start": "2018-12-20T00:16:16-05:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-12-20T00:16:16-05:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R70",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "n",
                                    "display": "No",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "0fc0f1ba-2f2e-56b1-a6b9-5371999318a3",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA39380"
                    },
                    {
                        "value": "9e525e1a-1a58-cbcc-c533-88e2707e91c2",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/8f4b6b9a-5fbf-5e62-8c2a-72a626d2ba36"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-12-20T00:16:16-05:00",
                            "start": "2018-12-20T00:00:00-05:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 402.86
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 2014.3
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 2014.3
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-12-20T00:16:16-05:00",
                            "start": "2018-12-20T00:00:00-05:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.812Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "d3dfcace-d661-4897-90ed-bf1064d51b1e",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/9e525e1a-1a58-cbcc-c533-88e2707e91c2",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 1611.44
                    }
                },
                "procedure": [
                    {
                        "date": "2018-12-20T00:00:00-05:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-12-20T00:16:16-05:00",
                            "start": "2018-12-20T00:00:00-05:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-12-20"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2155.2
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2155.2
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/118dc751-794a-521c-9037-b5290a4316b4",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2019-07-18T01:15:00-04:00",
                    "start": "2019-07-11T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2019-07-11T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R76",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R70",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "n",
                                    "display": "No",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "HARTFORD HOSPITAL",
                    "reference": "Location/4a4a2012-31f8-5d15-8255-6b0215ea3c8d"
                },
                "id": "118dc751-794a-521c-9037-b5290a4316b4",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA35005"
                    },
                    {
                        "value": "8fb6bbea-835f-7c2b-9118-f2133e68fb9e",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/02a19c0a-314e-58d9-991a-dc3e9bdfda14"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 27.200000000000003
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 136
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 136
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 27.200000000000003
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 136
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 136
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 3,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 44.400000000000006
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 222
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            3
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 222
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 4,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            4
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 5,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 6,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 69.292
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 346.46
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 346.46
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 7,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 8,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 9,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 10,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 11,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            5
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 12,
                        "servicedPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.738Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "578dea64-0587-4c48-bec2-6a77013f15d7",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/8fb6bbea-835f-7c2b-9118-f2133e68fb9e",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2040.0320000000004
                    }
                },
                "procedure": [
                    {
                        "date": "2019-07-11T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2019-07-11T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2019-07-11T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 3,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2019-07-11T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 4,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2019-07-11T01:15:00-04:00",
                            "start": "2019-07-11T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2019-07-11"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 1596.12
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 155.17
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 1596.1200000000001
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/194f932b-424c-5d7b-bc86-f4913bd0f0ac",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2020-06-25T01:15:00-04:00",
                    "start": "2020-06-18T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2020-06-18T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R80",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "194f932b-424c-5d7b-bc86-f4913bd0f0ac",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA30355"
                    },
                    {
                        "value": "85ea9a70-78de-df60-eed9-b01ae0dc63f3",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/3db1c56f-f032-5af3-b0df-e0f0c22cc43b"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2020-06-18T01:15:00-04:00",
                            "start": "2020-06-18T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 857.438
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 4287.19
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 4287.19
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2020-06-18T01:15:00-04:00",
                            "start": "2020-06-18T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.700Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "f694bd97-2e8a-478e-b05d-122478c259a7",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/85ea9a70-78de-df60-eed9-b01ae0dc63f3",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 3429.752
                    }
                },
                "procedure": [
                    {
                        "date": "2020-06-18T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2020-06-18T01:15:00-04:00",
                            "start": "2020-06-18T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2020-06-18"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 4428.089999999999
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 877.6179999999996
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 917.6179999999996
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3510.4719999999998
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 40
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/1d219897-3c85-5d0b-988f-0dec28ad18c2",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-09-27T01:15:00-04:00",
                    "start": "2018-09-20T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-09-20T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R74",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "1d219897-3c85-5d0b-988f-0dec28ad18c2",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36545"
                    },
                    {
                        "value": "3e39f49a-756e-d666-a5c9-7e2e7812df9f",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/ca8f540c-74f6-5322-a35b-84ff7a1d7cc2"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-09-20T01:15:00-04:00",
                            "start": "2018-09-20T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 635.466
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3177.33
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3177.33
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-09-20T01:15:00-04:00",
                            "start": "2018-09-20T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.441Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "643627b0-7d1a-461e-a36e-63b43286298c",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/3e39f49a-756e-d666-a5c9-7e2e7812df9f",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2541.864
                    }
                },
                "procedure": [
                    {
                        "date": "2018-09-20T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-09-20T01:15:00-04:00",
                            "start": "2018-09-20T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-09-20"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3318.23
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3318.23
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/24aa6afa-ec95-5558-b8ba-ee7abb638c57",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2021-11-04T04:28:32-04:00",
                    "start": "2021-10-28T04:28:32-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2021-10-28T04:28:32-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R80",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "24aa6afa-ec95-5558-b8ba-ee7abb638c57",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA37904"
                    },
                    {
                        "value": "80cfddaf-a858-4eef-96ef-e5ab981d598b",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/deb4b484-b9d9-5a1e-ac86-808d3f246071"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2021-10-28T04:28:32-04:00",
                            "start": "2021-10-28T04:13:32-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2021-10-28T04:28:32-04:00",
                            "start": "2021-10-28T04:13:32-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1621.972
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 8109.86
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 8109.86
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 3,
                        "servicedPeriod": {
                            "end": "2021-10-28T04:28:32-04:00",
                            "start": "2021-10-28T04:13:32-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0.9560000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 4.78
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 4.78
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 4,
                        "servicedPeriod": {
                            "end": "2021-10-28T04:28:32-04:00",
                            "start": "2021-10-28T04:13:32-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.683Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "8d3261f9-1a06-427f-8e8e-e4567a97ef93",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/80cfddaf-a858-4eef-96ef-e5ab981d598b",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 6491.7119999999995
                    }
                },
                "procedure": [
                    {
                        "date": "2021-10-28T04:13:32-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2021-10-28T04:28:32-04:00",
                            "start": "2021-10-28T04:13:32-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2021-10-28"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 8199.55
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 24.53
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 8199.55
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 60
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/24ea2949-2e4a-5aa9-99cc-635ed321f7e1",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-03-29T01:15:00-04:00",
                    "start": "2018-03-22T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-03-22T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R50.9"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal Diagnosis",
                                        "system": "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "24ea2949-2e4a-5aa9-99cc-635ed321f7e1",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36485"
                    },
                    {
                        "value": "7b31bd59-b5b3-3021-ea05-a923a5ac8533",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/f1db646c-d6e9-56db-9454-7fdf8b5518e9"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-03-22T01:15:00-04:00",
                            "start": "2018-03-22T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 795.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3976.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3976.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-03-22T01:15:00-04:00",
                            "start": "2018-03-22T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.646Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "f628ce52-42f8-4d7c-bfd7-9eec7a4a93dd",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/7b31bd59-b5b3-3021-ea05-a923a5ac8533",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 3181.512
                    }
                },
                "procedure": [
                    {
                        "date": "2018-03-22T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-03-22T01:15:00-04:00",
                            "start": "2018-03-22T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-03-22"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 4117.79
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 4117.79
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/2bb20b36-09f2-52f6-9d30-58ce37fefdbc",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2021-09-23T01:17:02-04:00",
                    "start": "2021-09-16T01:17:02-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2021-09-16T01:17:02-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R77",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "2bb20b36-09f2-52f6-9d30-58ce37fefdbc",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA39101"
                    },
                    {
                        "value": "8fd3a933-de88-f6d7-116f-815e38f3f29f",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/00bc4c10-411e-57c2-8cf5-d9b4b48d2ff6"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2021-09-16T01:17:02-04:00",
                            "start": "2021-09-16T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 638.254
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3191.27
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3191.27
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2021-09-16T01:17:02-04:00",
                            "start": "2021-09-16T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.759Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "c91b8f91-7676-4870-b465-e0423f968d83",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/8fd3a933-de88-f6d7-116f-815e38f3f29f",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2553.016
                    }
                },
                "procedure": [
                    {
                        "date": "2021-09-16T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2021-09-16T01:17:02-04:00",
                            "start": "2021-09-16T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2021-09-16"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3332.17
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3332.17
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/342e7afa-b862-5128-a826-4414fd73d8bf",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2022-03-24T01:15:00-04:00",
                    "start": "2022-03-17T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2022-03-17T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R71",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "342e7afa-b862-5128-a826-4414fd73d8bf",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA30192"
                    },
                    {
                        "value": "d34cda72-f756-ee86-0720-1dfc115e1928",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/bb198253-2b66-5d7d-a839-6e17f00f8e7e"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2022-03-17T01:15:00-04:00",
                            "start": "2022-03-17T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 553.3140000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 2766.57
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 2766.57
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2022-03-17T01:15:00-04:00",
                            "start": "2022-03-17T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.926Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "5cba4626-0c59-44c7-9d55-454ab0bedbd8",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/d34cda72-f756-ee86-0720-1dfc115e1928",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2213.2560000000003
                    }
                },
                "procedure": [
                    {
                        "date": "2022-03-17T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2022-03-17T01:15:00-04:00",
                            "start": "2022-03-17T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2022-03-17"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2907.4700000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2907.4700000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/35b21668-86b5-5baf-bdb8-bedb8c843c90",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2017-03-30T01:19:29-04:00",
                    "start": "2017-03-23T01:19:29-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2017-03-23T01:19:29-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R79",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "35b21668-86b5-5baf-bdb8-bedb8c843c90",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA39736"
                    },
                    {
                        "value": "4157ff56-ae54-8ee4-4bbf-9951406de680",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/388c4b2f-35bd-51d6-b0ba-781d8f828b84"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2017-03-23T01:19:29-04:00",
                            "start": "2017-03-23T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 554.784
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 2773.92
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 2773.92
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2017-03-23T01:19:29-04:00",
                            "start": "2017-03-23T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.458Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "5d976ce4-445e-4eab-a010-5d1c6da5f364",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/4157ff56-ae54-8ee4-4bbf-9951406de680",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2219.136
                    }
                },
                "procedure": [
                    {
                        "date": "2017-03-23T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2017-03-23T01:19:29-04:00",
                            "start": "2017-03-23T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2017-03-23"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2914.82
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 2914.82
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/3bf404f0-3ab1-5199-bf3b-f4e2e3ce629e",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-07-12T01:15:00-04:00",
                    "start": "2018-07-05T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-07-05T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R78",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "HARTFORD HOSPITAL",
                    "reference": "Location/4a4a2012-31f8-5d15-8255-6b0215ea3c8d"
                },
                "id": "3bf404f0-3ab1-5199-bf3b-f4e2e3ce629e",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA35693"
                    },
                    {
                        "value": "6676c8a4-02c8-79dd-7876-fb5ce724741c",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/749509df-b0d0-5b51-8a93-e2ed107405a3"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 44.400000000000006
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 222
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 222
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 3,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 4,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 154.626
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 773.13
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 773.13
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 5,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "diagnosisSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 6,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 7,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 8,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            3
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 9,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 7.384
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 36.92
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 36.92
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 10,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 18.378
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 91.89
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            4
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "19",
                                    "display": "Off Campus-Outpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 91.89
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 11,
                        "servicedPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.598Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "9e1736d5-4054-48ef-8b71-31475a5d1a6d",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/6676c8a4-02c8-79dd-7876-fb5ce724741c",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2266.8160000000007
                    }
                },
                "procedure": [
                    {
                        "date": "2018-07-05T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2018-07-05T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2018-07-05T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 3,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2018-07-05T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 4,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2018-07-05T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 5,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-07-05T01:15:00-04:00",
                            "start": "2018-07-05T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-07-05"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 1750.79
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 155.17
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 1750.79
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/3cb8d9e7-c98f-5f8f-bebc-d2174fa3b60a",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2021-12-23T00:19:20-05:00",
                    "start": "2021-12-16T00:19:20-05:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2021-12-16T00:19:20-05:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R78",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "3cb8d9e7-c98f-5f8f-bebc-d2174fa3b60a",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA30461"
                    },
                    {
                        "value": "fd0eafac-096a-ed07-73a4-60ed004faa13",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/37433826-dcfa-5ddf-a4e8-9913bceb2761"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2021-12-16T00:19:20-05:00",
                            "start": "2021-12-16T00:00:00-05:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1001.884
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 5009.42
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 5009.42
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2021-12-16T00:19:20-05:00",
                            "start": "2021-12-16T00:00:00-05:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:27.071Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "180c7b51-8e41-4ab0-95b7-1c57e741a874",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/fd0eafac-096a-ed07-73a4-60ed004faa13",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 4007.536
                    }
                },
                "procedure": [
                    {
                        "date": "2021-12-16T00:00:00-05:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2021-12-16T00:19:20-05:00",
                            "start": "2021-12-16T00:00:00-05:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2021-12-16"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 5150.32
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 5150.32
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/419fb8ce-89af-5d53-a345-3cf413bda508",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-05-31T01:15:00-04:00",
                    "start": "2018-05-24T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-05-24T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R76",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "419fb8ce-89af-5d53-a345-3cf413bda508",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA38509"
                    },
                    {
                        "value": "ec20ee5f-bb5e-12c7-32db-e7e630ba7376",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/16ca6268-4089-5e31-9095-543a5b120555"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 27.200000000000003
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 136
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            1
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 136
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 44.400000000000006
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 222
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "informationSequence": [
                            2
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 222
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 3,
                        "servicedPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 101.72000000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 508.6
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 508.6
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 4,
                        "servicedPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 124.87
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 624.35
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 624.35
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 5,
                        "servicedPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.986Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "d7fe4aec-7be7-4aec-9c2e-2d123f47aa27",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/ec20ee5f-bb5e-12c7-32db-e7e630ba7376",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 1192.7600000000002
                    }
                },
                "procedure": [
                    {
                        "date": "2018-05-24T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2018-05-24T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 2,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-05-24T01:15:00-04:00",
                            "start": "2018-05-24T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-05-24"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 442.53
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 442.53
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/45962963-fa1f-5c5b-b367-1a5afde8d5ab",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2018-06-28T01:18:49-04:00",
                    "start": "2018-06-21T01:18:49-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2018-06-21T01:18:49-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R79",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "45962963-fa1f-5c5b-b367-1a5afde8d5ab",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA38158"
                    },
                    {
                        "value": "0c4a9725-40d1-4b7f-dd86-ac6358125f0c",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/f66435b4-1346-55d6-970b-8fb48131dd60"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2018-06-21T01:18:49-04:00",
                            "start": "2018-06-21T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 597.3520000000001
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 2986.76
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 2986.76
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99223",
                                    "display": "New or Established Patient Initial Hospital Inpatient Care Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2018-06-21T01:18:49-04:00",
                            "start": "2018-06-21T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.245Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "c9003e8b-6388-406d-814d-db56d19d5b33",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/0c4a9725-40d1-4b7f-dd86-ac6358125f0c",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2389.4080000000004
                    }
                },
                "procedure": [
                    {
                        "date": "2018-06-21T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2018-06-21T01:18:49-04:00",
                            "start": "2018-06-21T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2018-06-21"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3127.6600000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3127.6600000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/514476aa-2cbc-56cf-b70e-2f237bf11009",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2017-12-28T00:15:00-05:00",
                    "start": "2017-12-21T00:15:00-05:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2017-12-21T00:15:00-05:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R75",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "514476aa-2cbc-56cf-b70e-2f237bf11009",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36150"
                    },
                    {
                        "value": "4c693330-2beb-7ac8-ecde-3d68d08685f1",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/50b9c407-b779-5481-ac7c-aefc168a488c"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2017-12-21T00:15:00-05:00",
                            "start": "2017-12-21T00:00:00-05:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 779.652
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3898.26
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3898.26
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2017-12-21T00:15:00-05:00",
                            "start": "2017-12-21T00:00:00-05:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.535Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "d47516bc-5efd-408e-8108-d526e3406b82",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/4c693330-2beb-7ac8-ecde-3d68d08685f1",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 3118.608
                    }
                },
                "procedure": [
                    {
                        "date": "2017-12-21T00:00:00-05:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.1",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2017-12-21T00:15:00-05:00",
                            "start": "2017-12-21T00:00:00-05:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2017-12-21"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 4039.1600000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 4039.1600000000003
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/5584bb83-2ee8-5557-b6a6-03df555b30d8",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2022-06-23T01:19:31-04:00",
                    "start": "2022-06-16T01:19:31-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2022-06-16T01:19:31-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R74",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "5584bb83-2ee8-5557-b6a6-03df555b30d8",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA39087"
                    },
                    {
                        "value": "d89dd5ca-e5ce-bccd-a854-67dce9f7bf89",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/b723331c-598a-5bc7-a5c6-e0929f7f76fc"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2022-06-16T01:19:31-04:00",
                            "start": "2022-06-16T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 713.984
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3569.92
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3569.92
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2022-06-16T01:19:31-04:00",
                            "start": "2022-06-16T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.945Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "aa55d92c-e6bc-4ce9-a44a-677040d0cc92",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/d89dd5ca-e5ce-bccd-a854-67dce9f7bf89",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2855.936
                    }
                },
                "procedure": [
                    {
                        "date": "2022-06-16T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2022-06-16T01:19:31-04:00",
                            "start": "2022-06-16T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2022-06-16"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3710.82
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3710.82
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/5bc3e3da-7461-5e68-b4b5-8b53abedb71a",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2017-09-28T01:15:00-04:00",
                    "start": "2017-09-21T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2017-09-21T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R75",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "5bc3e3da-7461-5e68-b4b5-8b53abedb71a",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA37423"
                    },
                    {
                        "value": "27edf198-dbd6-55f3-6db8-c2e1bf976991",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/786b9972-25aa-55e2-9e72-6115fde9b71b"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2017-09-21T01:15:00-04:00",
                            "start": "2017-09-21T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 748.24
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 3741.2
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 3741.2
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2017-09-21T01:15:00-04:00",
                            "start": "2017-09-21T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.321Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "12b55120-3c0a-4606-b875-72a3bbffee45",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/27edf198-dbd6-55f3-6db8-c2e1bf976991",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2992.96
                    }
                },
                "procedure": [
                    {
                        "date": "2017-09-21T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "principal",
                                        "display": "Principal",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2017-09-21T01:15:00-04:00",
                            "start": "2017-09-21T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2017-09-21"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3882.1
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3882.1
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        },
        {
            "fullUrl": "https://api.flexpa.com/fhir/ExplanationOfBenefit/5d7a786d-d3fd-543e-95e0-f5a73ff70a2d",
            "resource": {
                "adjudication": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "benefitpaymentstatus",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator"
                                }
                            ]
                        },
                        "reason": {
                            "coding": [
                                {
                                    "code": "innetwork",
                                    "display": "In Network"
                                }
                            ]
                        }
                    }
                ],
                "billablePeriod": {
                    "end": "2019-06-27T01:15:00-04:00",
                    "start": "2019-06-20T01:15:00-04:00"
                },
                "careTeam": [
                    {
                        "provider": {
                            "display": "Unknown"
                        },
                        "responsible": true,
                        "role": {
                            "coding": [
                                {
                                    "code": "primary",
                                    "display": "Primary provider",
                                    "system": "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
                                }
                            ]
                        },
                        "sequence": 1
                    }
                ],
                "created": "2019-06-20T01:15:00-04:00",
                "diagnosis": [
                    {
                        "diagnosisCodeableConcept": {
                            "coding": [
                                {
                                    "code": "R76",
                                    "system": "http://hl7.org/fhir/sid/icd-10-cm"
                                }
                            ]
                        },
                        "onAdmission": {
                            "coding": [
                                {
                                    "code": "u",
                                    "display": "Unknown",
                                    "system": "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "disposition": "Approved",
                "facility": {
                    "display": "CONNECTICUT CHILDRENS MEDICAL CENTER",
                    "reference": "Location/66ba8a64-d5c2-51a7-9c8a-2ecc01d9eaeb"
                },
                "id": "5d7a786d-d3fd-543e-95e0-f5a73ff70a2d",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "code": "uc",
                                    "display": "Unique Claim ID",
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            ]
                        }
                    },
                    {
                        "system": "https://sources.aetna.com/EOB/identifier/claimid/62",
                        "value": "CLMA36937"
                    },
                    {
                        "value": "0895d128-9a29-c49c-5090-2fbd42dcd5f4",
                        "system": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/SourceResourceId"
                    }
                ],
                "insurance": [
                    {
                        "coverage": {
                            "display": "Aetna or its Affiliates (collectively, 'Aetna')",
                            "reference": "Coverage/375d2b42-96eb-54d4-a0f9-8303abd7d84c"
                        },
                        "focal": true
                    }
                ],
                "insurer": {
                    "display": "Aetna or its Affiliates (collectively, 'Aetna')"
                },
                "item": [
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 1.5
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99251",
                                    "display": "New or Established Patient Initial Inpatient Consultation Services",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 1,
                        "servicedPeriod": {
                            "end": "2019-06-20T01:15:00-04:00",
                            "start": "2019-06-20T01:00:00-04:00"
                        }
                    },
                    {
                        "adjudication": [
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 583.788
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "coinsurance",
                                            "display": "Coinsurance",
                                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 2918.94
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "submitted",
                                            "display": "Submitted",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            },
                            {
                                "amount": {
                                    "currency": "USD",
                                    "value": 0
                                },
                                "category": {
                                    "coding": [
                                        {
                                            "code": "deductible",
                                            "display": "Deductible",
                                            "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                        }
                                    ]
                                }
                            }
                        ],
                        "locationCodeableConcept": {
                            "coding": [
                                {
                                    "code": "21",
                                    "display": "Inpatient Hospital",
                                    "system": "http://terminology.hl7.org/CodeSystem/ex-serviceplace"
                                }
                            ]
                        },
                        "net": {
                            "currency": "USD",
                            "value": 2918.94
                        },
                        "productOrService": {
                            "coding": [
                                {
                                    "code": "99234",
                                    "display": "Observation or Inpatient Care Services (Including Admission and Discharge Services)",
                                    "system": "http://www.ama-assn.org/go/cpt"
                                }
                            ]
                        },
                        "quantity": {
                            "value": 1
                        },
                        "revenue": {
                            "coding": [
                                {
                                    "code": "0517",
                                    "display": "Family Clinic",
                                    "system": "https://www.nubc.org/CodeSystem/RevenueCodes"
                                }
                            ]
                        },
                        "sequence": 2,
                        "servicedPeriod": {
                            "end": "2019-06-20T01:15:00-04:00",
                            "start": "2019-06-20T01:00:00-04:00"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2023-11-27T19:17:26.226Z",
                    "profile": [
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit",
                        "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional"
                    ],
                    "versionId": "8446a690-05ae-4c90-8506-0f809061c8ab",
                    "source": "https://vteapif1.aetna.com/fhirdemo/v2/patientaccess/ExplanationOfBenefit/0895d128-9a29-c49c-5090-2fbd42dcd5f4",
                    "tag": [
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenId",
                            "code": "38bbb48f-834d-4e68-a112-6d916aca2b7c"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/EndpointId",
                            "code": "7c308678-b82f-4787-b961-9e62f24d4120"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/ApplicationId",
                            "code": "9d50c6e9-9d08-4c2f-b6d2-f5d3e3fd3a8f"
                        },
                        {
                            "system": "https://fhir.flexpa.com/identifiers/PatientAccessTokenMode",
                            "code": "TEST"
                        }
                    ]
                },
                "outcome": "complete",
                "patient": {
                    "reference": "Patient/dff11bbd-9d99-5770-89b6-9e4955c2c418"
                },
                "payee": {
                    "party": {
                        "display": "Unknown"
                    },
                    "type": {
                        "coding": [
                            {
                                "code": "provider",
                                "display": "provider",
                                "system": "http://terminology.hl7.org/CodeSystem/payeetype"
                            }
                        ]
                    }
                },
                "payment": {
                    "amount": {
                        "currency": "USD",
                        "value": 2335.152
                    }
                },
                "procedure": [
                    {
                        "date": "2019-06-20T01:00:00-04:00",
                        "procedureCodeableConcept": {
                            "coding": [
                                {
                                    "code": "00.01",
                                    "system": "http://terminology.hl7.org/CodeSystem/icd9"
                                }
                            ]
                        },
                        "sequence": 1,
                        "type": [
                            {
                                "coding": [
                                    {
                                        "code": "other",
                                        "display": "Other",
                                        "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "provider": {
                    "display": "Unknown"
                },
                "resourceType": "ExplanationOfBenefit",
                "status": "active",
                "subType": {
                    "coding": [
                        {
                            "code": "inpatient",
                            "display": "Inpatient",
                            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType"
                        }
                    ],
                    "text": "Inpatient"
                },
                "supportingInfo": [
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "admissionperiod",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 1,
                        "timingPeriod": {
                            "end": "2019-06-20T01:15:00-04:00",
                            "start": "2019-06-20T01:00:00-04:00"
                        }
                    },
                    {
                        "category": {
                            "coding": [
                                {
                                    "code": "clmrecvddate",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType"
                                }
                            ]
                        },
                        "sequence": 2,
                        "timingDate": "2019-06-20"
                    }
                ],
                "total": [
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3059.84
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "submitted",
                                    "display": "Submitted Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "deductible",
                                    "display": "Deductible",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "coinsurance",
                                    "display": "Coinsurance",
                                    "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 3059.84
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "eligible",
                                    "display": "Eligible Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "benefit",
                                    "display": "Benefit Amount",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    },
                    {
                        "amount": {
                            "currency": "USD",
                            "value": 0
                        },
                        "category": {
                            "coding": [
                                {
                                    "code": "copay",
                                    "display": "Copay",
                                    "system": "http://terminology.hl7.org/CodeSystem/adjudication"
                                }
                            ]
                        }
                    }
                ],
                "type": {
                    "coding": [
                        {
                            "code": "institutional",
                            "display": "Institutional",
                            "system": "http://terminology.hl7.org/CodeSystem/claim-type"
                        }
                    ]
                },
                "use": "claim"
            }
        }
    ],
    "link": [
        {
            "relation": "self",
            "url": "https://api.flexpa.com/fhir/ExplanationOfBenefit?_count=20&_tag=https%3A%2F%2Ffhir.flexpa.com%2Fidentifiers%2FPatientAccessTokenId%7C38bbb48f-834d-4e68-a112-6d916aca2b7c"
        },
        {
            "relation": "first",
            "url": "https://api.flexpa.com/fhir/ExplanationOfBenefit?_count=20&_offset=0&_tag=https%3A%2F%2Ffhir.flexpa.com%2Fidentifiers%2FPatientAccessTokenId%7C38bbb48f-834d-4e68-a112-6d916aca2b7c"
        },
        {
            "relation": "next",
            "url": "https://api.flexpa.com/fhir/ExplanationOfBenefit?_count=20&_offset=20&_tag=https%3A%2F%2Ffhir.flexpa.com%2Fidentifiers%2FPatientAccessTokenId%7C38bbb48f-834d-4e68-a112-6d916aca2b7c"
        }
    ]
}