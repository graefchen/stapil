#!/bin/bash
#
# Script to delete certain files in the interfaces folder
# by Simon Jünger (graefchen)
#

# change the current director to the interface directry
pushd interfaces
# remove all CSGO Interface Files
rm ICSGO*
# remove all DOTA Interface Files
rm IDOTA*
# remove all Economy Interface Files
rm IEcon*
# remove all Portal Interface Files
rm IPortal*
# remove all IGC* Interface Files
rm IGC*
# remove all TF Interface Files
rm ITF*
popd
