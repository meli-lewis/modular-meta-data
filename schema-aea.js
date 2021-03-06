schema = {
    "pages": [
        {
            "groups": [
                {
                    "id": "general",
                    "questions": [
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "title",
                            "label": "Trial Title"
                        },
                        {
                            "type": "textfield",
                            "id": "registration_number",
                            "label": "AEA RCT Registration Number"
                        },
                        {
                            "type": "textfield",
                            "id": "registration_date",
                            "label": "Registration Date"
                        },
                        {
                            "type": "textfield",
                            "id": "updated",
                            "label": "Last Updated"
                        }
                    ],
                    "title": "General Information"
                },
                {
                    "canRepeat": true,
                    "minRepeat": 1,
                    "maxRepeat": 3,
                    "repeatLabel": "location",
                    "id": "location",
                    "questions": [
                        {
                            "type": "select",
                            "required": true,
                            "options": [
                                "Afghanistan",
                                "Aland Islands",
                                "Albania",
                                "Algeria",
                                "American Samoa",
                                "Andorra",
                                "Angola",
                                "Anguilla",
                                "Antarctica",
                                "Antigua and Barbuda",
                                "Argentina",
                                "Armenia",
                                "Aruba",
                                "Ascension Island",
                                "Wallis and Futuna",
                                "Western Sahara",
                                "Yemen",
                                "Zambia",
                                "Zimbabwe"
                            ],
                            "id": "country",
                            "label": "Country"
                        },
                        {
                            "type": "textfield",
                            "id": "region",
                            "label": "Region"
                        }
                    ],
                    "title": "Location(s)"
                },
                {
                    "id": "primary_investigator",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "name",
                            "label": "Name"
                        },
                        {
                            "type": "textfield",
                            "id": "affiliation",
                            "label": "Affiliation"
                        },
                        {
                            "type": "textfield",
                            "id": "email",
                            "label": "Email"
                        }
                    ],
                    "title": "Primary Investigator"
                },
                {
                    "canRepeat": true,
                    "repeatLabel": "investigator",
                    "id": "other_investigator",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "name",
                            "label": "Name"
                        },
                        {
                            "type": "textfield",
                            "id": "affiliation",
                            "label": "Affiliation"
                        },
                        {
                            "type": "textfield",
                            "id": "email",
                            "label": "Email"
                        }
                    ],
                    "title": "Other Primary Investigator(s)"
                },
                {
                    "id": "additional",
                    "questions": [
                        {
                            "type": "select",
                            "required": true,
                            "options": [
                                "In Development",
                                "Ongoing",
                                "Completed",
                                "Abandoned"
                            ],
                            "id": "status",
                            "label": "Study Status"
                        },
                        {
                            "type": "checkbox",
                            "required": true,
                            "options": [
                                "Agriculture",
                                "Education",
                                "Electoral",
                                "Environment & Energy",
                                "Finance & Microfinance",
                                "Governance",
                                "Health",
                                "Labor",
                                "Post-conflict",
                                "Welfare"
                            ],
                            "id": "keyword",
                            "label": "Keyword(s)",
                            "helpText": "Please click on any of the following words which describe your trial."
                        },
                        {
                            "type": "textfield",
                            "id": "additional_keywords",
                            "label": "Additional Keyword(s)",
                            "helpText": "If there are more descriptive words which describe your trial but haven't been offered yet, please enter some English words. For multiple keywords, put a comma between entries."
                        },
                        {
                            "type": "textfield",
                            "id": "JEL",
                            "label": "JEL Code(s)",
                            "helpText": "If appropriate, please enter the term or terms from the Journal of Economic Literacy taxonomy, which best describes your trial."
                        },
                        {
                            "type": "textfield",
                            "id": "secondary_ID",
                            "label": "Secondary Identifying Number(s)",
                            "helpText": "Additional number(s) given to the trial by other funders, sponsors or registries (e.g. ClinicalTrials.gov, ISRCT, etc.)"
                        },
                        {
                            "required": true,
                            "type": "textarea",
                            "id": "abstract",
                            "label": "Abstract",
                            "helpText": "Describe your study in common language: this abstract will be public for people who search the trial registry even before the study is complete, so only share what you are comfortable sharing."
                        }
                    ],
                    "title": "Additional Trial Information"
                },
                {
                    "canRepeat": true,
                    "repeatLabel": "link",
                    "id": "external_link",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "external_url",
                            "label": "External Link URL: Link to other related websites, documents, etc."
                        },
                        {
                            "type": "checkbox",
                            "id": "external_description",
                            "label": "External Link Description: Description of linked content"
                        }
                    ],
                    "title": "External Link(s)"
                }
            ],
            "id": "page2",
            "title": "Trial Information"
        },
        {
            "groups": [
                {
                    "id": "trial_dates",
                    "questions": [
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "trial_start",
                            "label": "Trial Start Date"
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "intervention_start",
                            "label": "Intervention Start Date"
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "intervention_end",
                            "label": "Intervention End Date"
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "trial_end",
                            "label": "Trial End Date"
                        }
                    ],
                    "title": "Trial Dates"
                }
            ],
            "id": "page3",
            "title": "Dates"
        },
        {
            "groups": [
                {
                    "canRepeat": true,
                    "repeatLabel": "sponsor",
                    "id": "sponsors",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "sponsor_name",
                            "label": "Sponsor Name"
                        },
                        {
                            "type": "textfield",
                            "id": "sponsor_location",
                            "label": "Sponsor Location"
                        },
                        {
                            "type": "textfield",
                            "id": "sponsor_website",
                            "label": "Sponsor Website (URL)"
                        }
                    ],
                    "title": "Sponsors"
                },
                {
                    "canRepeat": true,
                    "repeatLabel": "partner",
                    "id": "partners",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "partner_name",
                            "label": "Partner Name"
                        },
                        {
                            "type": "radio",
                            "options": [
                                "Government",
                                "Municipality",
                                "NGO",
                                "Private Company",
                                "N/A"
                            ],
                            "id": "partner_type",
                            "label": "Partner Type"
                        },
                        {
                            "type": "textfield",
                            "id": "partner_website",
                            "label": "Partner Website (URL)"
                        }
                    ],
                    "title": "Partner(s)"
                }
            ],
            "id": "page4",
            "title": "Sponsors & Partners"
        },
        {
            "groups": [
                {
                    "id": "interventions",
                    "questions": [
                        {
                            "type": "textarea",
                            "id": "intervention_public",
                            "label": "Intervention (Public): Describe your intervention(s)."
                        },
                        {
                            "type": "textarea",
                            "id": "intervention_hidden",
                            "label": "Intervention (Hidden)"
                        }
                    ],
                    "title": "Interventions"
                },
                {
                    "id": "outcomes",
                    "questions": [
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "end_points",
                            "label": "Outcomes (End Points)",
                            "helpText": "What are your key outcome variables (endpoints) of interest in this experiment?"
                        },
                        {
                            "type": "textarea",
                            "id": "explanation",
                            "label": "Outcomes (Explanation)",
                            "helpText": "If some of your outcomes will be constructed (e.g. women empowerment) please provide a description of how the outcome will be constructed from the main variables."
                        }
                    ],
                    "title": "Outcomes"
                },
                {
                    "id": "experimental_design",
                    "questions": [
                        {
                            "required": true,
                            "type": "textarea",
                            "id": "design_public",
                            "label": "Experimental Design (Public)",
                            "helpText": "Describe your experimental designs. The field will be public as soon as the trial is registered. Limit this description to those aspects of your trial that you want to have public before the trial is over."
                        },
                        {
                            "type": "textarea",
                            "id": "design_hidden",
                            "label": "Experimental Design (Hidden)",
                            "helpText": "This field will remain hidden until the completion of the study, and will then become available to help people searching the registry undestand what you did in more details. Describe your study in more detail here."
                        },
                        {
                            "required": true,
                            "type": "textarea",
                            "id": "randomization_method",
                            "label": "Randomization Method",
                            "helpText": "Public lottery, randomization done in office by a computer, coin flip, etc."
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "randomization_unit",
                            "label": "Randomization Unit",
                            "helpText": "Unit (clusters) of randomization (e.g., individual, firm, school, experimental sessions). If you have more than one level of randomization (e.g. group level randomization for some treatment, and individual randomization for some treatments) mention it here."
                        },
                        {
                            "type": "radio",
                            "required": true,
                            "options": [
                                "Yes",
                                "No"
                            ],
                            "id": "clustered",
                            "label": "Was the treatment clustered?"
                        }
                    ],
                    "title": "Experimental Design"
                },
                {
                    "id": "sample_size",
                    "questions": [
                        {
                            "required": true,
                            "type": "textarea",
                            "id": "clusters",
                            "label": "Planned Number of Clusters",
                            "helpText": "Be sure to include the units, e.g. 200 Schools."
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "observations",
                            "label": "Planned Number of Observations",
                            "helpText": "Be sure to include the units, e.g. 10,000 pupils (same as cluster if the designed is not clustered)."
                        },
                        {
                            "required": true,
                            "type": "textarea",
                            "id": "sample_size",
                            "label": "Sample size (or number of clusters) by treatment arms, e.g. 50 schools control, 50 schools teacher training, 50 schools scholarship 50 schools both treatment"
                        },
                        {
                            "type": "textfield",
                            "id": "power_calculation",
                            "label": "Power calculation",
                            "helpText": "Minimum Detectable Effect Size for Main Outcomes. Accounting for sample design and clustering, what is the minimum detectable effect size for main outcomes. Specify the unit, standard deviation, and percentage."
                        }
                    ],
                    "title": "Sample Size"
                }
            ],
            "id": "page5",
            "title": "Experimental Details"
        },
        {
            "groups": [
                {
                    "id": "irb",
                    "questions": [
                        {
                            "type": "radio",
                            "required": true,
                            "options": [
                                "Yes",
                                "No"
                            ],
                            "id": "approval",
                            "label": "Did you obtain IRB approval for this study?"
                        }
                    ],
                    "title": "Institutional Review Boards (IRBs)"
                },
                {
                    "displayRules": {
                        "approval": "Yes"
                    },
                    "id": "irb-info",
                    "questions": [
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "irb_name",
                            "label": "IRB Name",
                            "caption": "Full name of Institutional Review Board"
                        },
                        {
                            "required": true,
                            "type": "textfield",
                            "id": "irb_approval_date",
                            "label": "IRB Approval Date",
                            "caption": "Date of the IRB approved trial."
                        },
                        {
                            "type": "textfield",
                            "id": "irb_approval_number",
                            "label": "IRB Approval Number",
                            "caption": "Number associated with this approval, if any."
                        }
                    ]
                }
            ],
            "id": "page6",
            "title": "IRB"
        },
        {
            "groups": [
                {
                    "canRepeat": true,
                    "repeatLabel": "document",
                    "id": "docs_materials",
                    "questions": [
                        {
                            "type": "textfield",
                            "id": "doc_name",
                            "label": "Document Name"
                        },
                        {
                            "type": "select",
                            "options": [
                                "IRB Protocol",
                                "Proposal",
                                "Survey Instrument",
                                "Other"
                            ],
                            "id": "doc_type",
                            "label": "Document Type"
                        },
                        {
                            "id": "custom_type",
                            "label": "Custom Type: If Other was selected from the previous field, please enter in the type of document here",
                            "type": "textfield"
                        },
                        {
                            "type": "file",
                            "id": "supporting_document",
                            "label": "Select document"
                        }
                    ],
                    "title": "Supporting Documents and Materials",
                    "helpText": "In this section, you can upload any document that you think may be useful to others to interpret your work or as they design their own work, including survey instruments, proposal(s), protocols submitted to IRB, or others. These documents will be kept private until you authorize their release."
                }
            ],
            "id": "page7",
            "title": "Docs & Materials"
        },
        {
            "groups": [
                {
                    "id": "analysis_plan",
                    "questions": [
                        {
                            "type": "checkbox",
                            "options": [
                                "Allow Public Viewing of Analysis Plan Documents?"
                            ],
                            "id": "allow_public",
                            "label": "Here, if you wish, upload an analysis plan with as much details as you would like. You can do this at any point in the process or not at all. If a new copy is uploaded, the system will track all the versions and the date at which they were submitted. Note: the information is private by default until the PI authorizes the release (to the public or to a specific person)."
                        }
                    ]
                },
                {
                    "id": "documents",
                    "canRepeat": true,
                    "repeatLabel": "document",
                    "questions": [
                        {
                            "type": "file",
                            "id": "add_document",
                            "label": "Add document"
                        }
                    ],
                    "title": "Analysis Plan"
                }
            ],
            "id": "page8",
            "title": "Analysis Plan"
        }
    ]
}